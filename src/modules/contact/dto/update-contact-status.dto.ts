import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ContactStatus } from '../../../database/generated/prisma/enums';

export class UpdateContactStatusDto {
  @ApiProperty({ enum: ContactStatus, example: ContactStatus.READ })
  @IsEnum(ContactStatus)
  @IsNotEmpty()
  status: ContactStatus;

  @ApiPropertyOptional({ example: 'Replied via email on 2026-09-09' })
  @IsOptional()
  @IsString()
  notes?: string;
}
