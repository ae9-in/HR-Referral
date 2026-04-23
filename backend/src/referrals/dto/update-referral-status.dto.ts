import { IsEnum, IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum ReferralStatus {
  NEW = 'NEW',
  CONTACTED = 'CONTACTED',
  SELECTED = 'SELECTED',
  REJECTED = 'REJECTED'
}

export class UpdateReferralStatusDto {
  @ApiProperty({ enum: ReferralStatus })
  @IsEnum(ReferralStatus)
  @IsNotEmpty()
  status: ReferralStatus;

  @ApiProperty({ example: 'Candidate contacted via phone.', required: false })
  @IsString()
  @IsOptional()
  note?: string;
}
