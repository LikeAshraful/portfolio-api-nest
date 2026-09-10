import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { EmploymentType } from '../../../database/generated/prisma/enums';

export class CreateExperienceDto {
  @ApiProperty({ example: 'Tech Corp Global' })
  @IsString()
  @IsNotEmpty()
  company: string;

  @ApiProperty({ example: 'Staff Backend Architect' })
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiPropertyOptional({ example: 'San Francisco, CA (Remote)' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ enum: EmploymentType, default: EmploymentType.FULL_TIME })
  @IsOptional()
  @IsEnum(EmploymentType)
  employmentType?: EmploymentType;

  @ApiProperty({ example: '2023-01-01T00:00:00.000Z' })
  @IsDateString()
  @IsNotEmpty()
  startDate: string;

  @ApiPropertyOptional({ example: '2025-01-01T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ example: true, default: false })
  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;

  @ApiProperty({ example: 'Led core backend engineering for high-throughput distributed systems.' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiPropertyOptional({
    example: [
      'Architected event-driven microservices processing 50k req/sec',
      'Reduced p99 database latency by 45% via Redis caching layer',
    ],
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

  @ApiPropertyOptional({ example: ['NestJS', 'PostgreSQL', 'Kafka', 'Kubernetes'], type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  technologies?: string[];

  @ApiPropertyOptional({ example: 1, default: 0 })
  @IsOptional()
  @IsInt()
  sortOrder?: number;
}
