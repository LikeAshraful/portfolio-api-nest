import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
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
  IsUUID,
  ValidateNested,
} from 'class-validator';
import {
  ProjectCategory,
  ProjectStatus,
} from '../../../database/generated/prisma/enums';

export class ProjectSkillDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'UUID of the Skill',
  })
  @IsUUID()
  @IsNotEmpty()
  skillId: string;

  @ApiPropertyOptional({ example: true, default: false })
  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean = false;
}

export class CreateProjectDto {
  @ApiProperty({ example: 'Distributed Microservices Event Engine' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({
    example: 'distributed-microservices-event-engine',
    description: 'URL-friendly slug (auto-generated from title if omitted)',
  })
  @IsOptional()
  @IsString()
  slug?: string;

  @ApiProperty({
    example: 'High-throughput event streaming platform with Kafka and NestJS',
  })
  @IsString()
  @IsNotEmpty()
  summary: string;

  @ApiProperty({
    example: '# Distributed Event Engine\n\nArchitecture details...',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiPropertyOptional({
    example: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
  })
  @IsOptional()
  @IsUrl()
  thumbnailUrl?: string;

  @ApiPropertyOptional({
    example: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  })
  @IsOptional()
  @IsUrl()
  bannerUrl?: string;

  @ApiPropertyOptional({ example: 'https://engine.alexmorgan.dev' })
  @IsOptional()
  @IsUrl()
  liveDemoUrl?: string;

  @ApiPropertyOptional({
    example: 'https://github.com/alexmorgan/event-engine',
  })
  @IsOptional()
  @IsUrl()
  repoUrl?: string;

  @ApiPropertyOptional({ example: true, default: false })
  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @ApiPropertyOptional({
    enum: ProjectStatus,
    default: ProjectStatus.PUBLISHED,
  })
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

  @ApiPropertyOptional({
    enum: ProjectCategory,
    default: ProjectCategory.BACKEND,
  })
  @IsOptional()
  @IsEnum(ProjectCategory)
  category?: ProjectCategory;

  @ApiPropertyOptional({ example: 1, default: 0 })
  @IsOptional()
  @IsInt()
  sortOrder?: number;

  @ApiPropertyOptional({ example: '2025-01-01T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  startedAt?: string;

  @ApiPropertyOptional({ example: '2025-06-01T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  completedAt?: string;

  @ApiPropertyOptional({
    type: [ProjectSkillDto],
    description: 'Associated skills/technologies',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProjectSkillDto)
  skills?: ProjectSkillDto[];
}
