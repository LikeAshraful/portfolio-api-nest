import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { EducationEntity } from '../entities/experience.entity';

export class CreateEducationDto {
  @ApiProperty({ example: 'University of California, Berkeley' })
  @IsString()
  @IsNotEmpty()
  institution: string;

  @ApiProperty({ example: 'Bachelor of Science' })
  @IsString()
  @IsNotEmpty()
  degree: string;

  @ApiPropertyOptional({ example: 'Computer Science' })
  @IsOptional()
  @IsString()
  fieldOfStudy?: string;

  @ApiProperty({ example: '2016-09-01T00:00:00.000Z' })
  @IsDateString()
  @IsNotEmpty()
  startDate: string;

  @ApiPropertyOptional({ example: '2020-05-30T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ example: false, default: false })
  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;

  @ApiPropertyOptional({ example: '3.9 / 4.0' })
  @IsOptional()
  @IsString()
  grade?: string;

  @ApiPropertyOptional({ example: 'Specialized in Distributed Systems and Computer Architecture.' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 'https://credentials.example.com/degree-123' })
  @IsOptional()
  @IsUrl()
  credentialUrl?: string;

  @ApiPropertyOptional({ example: 1, default: 0 })
  @IsOptional()
  @IsInt()
  sortOrder?: number;
}

export class UpdateEducationDto {
  @ApiPropertyOptional({ example: 'University of California, Berkeley' })
  @IsOptional()
  @IsString()
  institution?: string;

  @ApiPropertyOptional({ example: 'Bachelor of Science' })
  @IsOptional()
  @IsString()
  degree?: string;

  @ApiPropertyOptional({ example: 'Computer Science' })
  @IsOptional()
  @IsString()
  fieldOfStudy?: string;

  @ApiPropertyOptional({ example: '2016-09-01T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ example: '2020-05-30T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;

  @ApiPropertyOptional({ example: '3.9 / 4.0' })
  @IsOptional()
  @IsString()
  grade?: string;

  @ApiPropertyOptional({ example: 'Specialized in Distributed Systems and Computer Architecture.' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 'https://credentials.example.com/degree-123' })
  @IsOptional()
  @IsUrl()
  credentialUrl?: string;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  sortOrder?: number;
}

export class EducationResponseDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ example: 'University of California, Berkeley' })
  institution: string;

  @ApiProperty({ example: 'Bachelor of Science' })
  degree: string;

  @ApiPropertyOptional({ example: 'Computer Science' })
  fieldOfStudy?: string | null;

  @ApiProperty({ example: '2016-09-01T00:00:00.000Z' })
  startDate: Date;

  @ApiPropertyOptional({ example: '2020-05-30T00:00:00.000Z' })
  endDate?: Date | null;

  @ApiProperty({ example: false })
  isCurrent: boolean;

  @ApiPropertyOptional({ example: '3.9 / 4.0' })
  grade?: string | null;

  @ApiPropertyOptional({ example: 'Specialized in Distributed Systems and Algorithms.' })
  description?: string | null;

  @ApiPropertyOptional({ example: 'https://credentials.example.com/degree-123' })
  credentialUrl?: string | null;

  @ApiProperty({ example: 1 })
  sortOrder: number;

  @ApiProperty({ example: '2026-01-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2026-01-01T00:00:00.000Z' })
  updatedAt: Date;

  static fromEntity(entity: EducationEntity): EducationResponseDto {
    const dto = new EducationResponseDto();
    dto.id = entity.id;
    dto.institution = entity.institution;
    dto.degree = entity.degree;
    dto.fieldOfStudy = entity.fieldOfStudy;
    dto.startDate = entity.startDate;
    dto.endDate = entity.endDate;
    dto.isCurrent = entity.isCurrent;
    dto.grade = entity.grade;
    dto.description = entity.description;
    dto.credentialUrl = entity.credentialUrl;
    dto.sortOrder = entity.sortOrder;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}
