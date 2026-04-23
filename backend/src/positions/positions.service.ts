import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PositionsService {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll() {
    return this.prisma.position.findMany({
      where: { isActive: true },
      orderBy: { title: 'asc' },
    });
  }

  async create(title: string, department?: string) {
    return this.prisma.position.create({
      data: { title, department },
    });
  }
}
