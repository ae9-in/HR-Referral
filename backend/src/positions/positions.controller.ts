import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { PositionsService } from './positions.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('positions')
@Controller('positions')
export class PositionsController {
  constructor(private readonly positionsService: PositionsService) {}

  @Get()
  @ApiOperation({ summary: 'List all active hiring positions' })
  async findAll() {
    return this.positionsService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new hiring position (Admin only)' })
  async create(@Body() body: { title: string; department?: string }) {
    return this.positionsService.create(body.title, body.department);
  }
}
