import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { ProjectCategory, ProjectStatus } from '../../../database/generated/prisma/enums';
import { ProjectSkillDto } from './create-project.dto';

export class UpdateProjectDto {
  @ApiPropertyOptional({ example: 'Distributed Microservices Event Engine' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ example: 'distributed-microservices-event-engine' })
  @IsOptional()
  @IsString()
  slug?: string;

  @ApiPropertyOptional({ example: 'High-throughput event streaming platform with Kafka and NestJS' })
  @IsOptional()
  @IsString()
  summary?: string;

  @ApiPropertyOptional({ example: '# Distributed Event Engine\n\nArchitecture details...' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31' })
  @IsOptional()
  @IsUrl()
  thumbnailUrl?: string;

  @ApiPropertyOptional({ example: 'https://images.unsplash.com/photo-1518770660439-4636190af475' })
  @IsOptional()
  @IsUrl()
  bannerUrl?: string;

  @ApiPropertyOptional({ example: 'https://engine.alexmorgan.dev' })
  @IsOptional()
  @IsUrl()
  liveDemoUrl?: string;

  @ApiPropertyOptional({ example: 'https://github.com/alexmorgan/event-engine' })
  @IsOptional()
  @IsUrl()
  repoUrl?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @ApiPropertyOptional({ enum: ProjectStatus })
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

  @ApiPropertyOptional({ enum: ProjectCategory })
  @IsOptional()
  @IsEnum(ProjectCategory)
  category?: ProjectCategory;

  @ApiPropertyOptional({ example: 1 })
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

  @ApiPropertyOptional({ type: [ProjectSkillDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProjectSkillDto)
  skills?: ProjectSkillDto[];
}
