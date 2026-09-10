import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { EmploymentType } from '../../../database/generated/prisma/enums';

export class UpdateExperienceDto {
  @ApiPropertyOptional({ example: 'Tech Corp Global' })
  @IsOptional()
  @IsString()
  company?: string;

  @ApiPropertyOptional({ example: 'Staff Backend Architect' })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiPropertyOptional({ example: 'San Francisco, CA' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ enum: EmploymentType })
  @IsOptional()
  @IsEnum(EmploymentType)
  employmentType?: EmploymentType;

  @ApiPropertyOptional({ example: '2023-01-01T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ example: '2025-01-01T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;

  @ApiPropertyOptional({ example: 'Led core backend engineering for high-throughput distributed systems.' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    example: ['Architected event-driven microservices processing 50k req/sec'],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  highlights?: string[];

  @ApiPropertyOptional({ example: 'https://techcorpglobal.com' })
  @IsOptional()
  @IsUrl()
  companyUrl?: string;

  @ApiPropertyOptional({ example: 'https://cdn.example.com/logos/techcorp.png' })
  @IsOptional()
  @IsUrl()
  companyLogoUrl?: string;

  @ApiPropertyOptional({ example: ['NestJS', 'PostgreSQL', 'Kafka'], type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  technologies?: string[];

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  sortOrder?: number;
}
