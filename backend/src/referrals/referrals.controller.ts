import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards, Request, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { ReferralsService } from './referrals.service';
import { CreateReferralDto } from './dto/create-referral.dto';
import { UpdateReferralStatusDto, ReferralStatus } from './dto/update-referral-status.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('referrals')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('referrals')
export class ReferralsController {
  constructor(private readonly referralsService: ReferralsService) {}

  @Post()
  @ApiOperation({ summary: 'Submit a new referral' })
  async create(@Request() req, @Body() createReferralDto: CreateReferralDto) {
    return this.referralsService.create(createReferralDto, req.user.userId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all referrals with optional filters' })
  @ApiQuery({ name: 'status', enum: ReferralStatus, required: false })
  @ApiQuery({ name: 'query', type: String, required: false })
  async findAll(@Query('status') status?: ReferralStatus, @Query('query') query?: string) {
    return this.referralsService.findAll(status, query);
  }

  @Get('stats')
  @ApiOperation({ summary: 'Get referral pipeline statistics' })
  async getStats() {
    return this.referralsService.getStats();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get referral details' })
  async findOne(@Param('id') id: string) {
    return this.referralsService.findOne(id);
  }

  @Post('bulk-import')
  @Roles('ADMIN', 'HR')
  @ApiOperation({ summary: 'Bulk import referrals from CSV JSON data' })
  async bulkImport(@Request() req, @Body() body: { referrals: any[] }) {
    return this.referralsService.bulkImport(body.referrals, req.user.userId);
  }

  @Patch(':id/status')
  @Roles('ADMIN', 'HR')
  @ApiOperation({ summary: 'Update referral status (HR only)' })
  async updateStatus(
    @Request() req,
    @Param('id') id: string,
    @Body() updateDto: UpdateReferralStatusDto,
  ) {
    return this.referralsService.updateStatus(id, updateDto, req.user.userId);
  }

  @Patch(':id')
  @Roles('ADMIN', 'HR')
  @ApiOperation({ summary: 'Full update of referral details (HR only)' })
  async update(@Param('id') id: string, @Body() data: Partial<CreateReferralDto>) {
    return this.referralsService.update(id, data);
  }

  @Delete(':id')
  @Roles('ADMIN', 'HR')
  @ApiOperation({ summary: 'Delete a referral record (HR only)' })
  async remove(@Param('id') id: string) {
    return this.referralsService.remove(id);
  }
}
