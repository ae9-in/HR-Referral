import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateReferralDto } from './dto/create-referral.dto';
import { UpdateReferralStatusDto, ReferralStatus } from './dto/update-referral-status.dto';

@Injectable()
export class ReferralsService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createReferralDto: CreateReferralDto, userId: string) {
    const position = await this.prisma.position.findUnique({
      where: { id: createReferralDto.positionId },
    });
    if (!position) throw new NotFoundException('Position not found');

    return this.prisma.referral.create({
      data: {
        ...createReferralDto,
        referredById: userId,
      },
      include: {
        position: true,
      },
    });
  }

  async findAll(status?: ReferralStatus, query?: string) {
    return this.prisma.referral.findMany({
      where: {
        AND: [
          status ? { status } : {},
          query ? {
            OR: [
              { candidateName: { contains: query } },
              { candidateEmail: { contains: query } },
              { position: { title: { contains: query } } },
            ],
          } : {},
        ],
      },
      include: {
        referredBy: { select: { id: true, name: true, email: true, employeeId: true } },
        position: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const referral = await this.prisma.referral.findUnique({
      where: { id },
      include: {
        referredBy: true,
        position: true,
        statusHistory: { orderBy: { createdAt: 'desc' } },
      },
    });
    if (!referral) throw new NotFoundException('Referral not found');
    return referral;
  }

  async updateStatus(id: string, updateDto: UpdateReferralStatusDto, userId: string) {
    const referral = await this.findOne(id);

    return this.prisma.$transaction(async (tx) => {
      // Create status log
      await tx.statusLog.create({
        data: {
          referralId: id,
          fromStatus: referral.status,
          toStatus: updateDto.status,
          note: updateDto.note,
          changedBy: userId,
        },
      });

      // Update referral
      return tx.referral.update({
        where: { id },
        data: { status: updateDto.status },
        include: { position: true },
      });
    });
  }

  async getStats() {
    const stats = await this.prisma.referral.groupBy({
      by: ['status'],
      _count: { _all: true },
    });
    return stats.reduce((acc, curr) => ({ ...acc, [curr.status]: curr._count._all }), {});
  }

  async bulkImport(data: any[], userId: string) {
    const results = [];
    for (const item of data) {
      try {
        const referral = await this.create({
          candidateName: item.candidateName,
          candidateEmail: item.candidateEmail,
          candidatePhone: item.candidatePhone || '',
          positionId: item.positionId,
          notes: 'Bulk Imported',
        }, userId);
        results.push(referral);
      } catch (err) {
        console.error('Failed to import item', item, err.message);
      }
    }
    return { imported: results.length, total: data.length };
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.referral.delete({ where: { id } });
  }

  async update(id: string, data: Partial<CreateReferralDto>) {
    await this.findOne(id);
    return this.prisma.referral.update({
      where: { id },
      data,
      include: { position: true },
    });
  }
}
