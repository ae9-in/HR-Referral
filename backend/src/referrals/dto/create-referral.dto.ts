import { IsEmail, IsNotEmpty, IsOptional, IsString, IsPhoneNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReferralDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  candidateName: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  candidateEmail: string;

  @ApiProperty({ example: '+919876543210' })
  @IsString()
  @IsNotEmpty()
  candidatePhone: string;

  @ApiProperty({ example: 'pos_cuid_123' })
  @IsString()
  @IsNotEmpty()
  positionId: string;

  @ApiProperty({ example: 'A strong full-stack candidate.', required: false })
  @IsString()
  @IsOptional()
  notes?: string;

  @ApiProperty({ example: 'https://s3.amazonaws.../resume.pdf', required: false })
  @IsString()
  @IsOptional()
  resumeUrl?: string;
}
