import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ProjectCategory, ProjectStatus } from '../../../database/generated/prisma/enums';

export class ProjectSkillInfo {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  skillId: string;

  @ApiProperty({ example: 'NestJS' })
  name: string;

  @ApiPropertyOptional({ example: 'https://cdn.example.com/nestjs.svg' })
  iconUrl?: string | null;

  @ApiProperty({ example: true })
  isPrimary: boolean;
}

export class ProjectEntity {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ example: 'Distributed Microservices Event Engine' })
  title: string;

  @ApiProperty({ example: 'distributed-microservices-event-engine' })
  slug: string;

  @ApiProperty({ example: 'High-throughput event streaming platform with Kafka and NestJS' })
  summary: string;

  @ApiProperty({ example: '# Distributed Event Engine\n\nDetailed architectural overview...' })
  description: string;

  @ApiPropertyOptional({ example: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31' })
  thumbnailUrl?: string | null;

  @ApiPropertyOptional({ example: 'https://images.unsplash.com/photo-1518770660439-4636190af475' })
  bannerUrl?: string | null;

  @ApiPropertyOptional({ example: 'https://engine.alexmorgan.dev' })
  liveDemoUrl?: string | null;

  @ApiPropertyOptional({ example: 'https://github.com/alexmorgan/event-engine' })
  repoUrl?: string | null;

  @ApiProperty({ example: true })
  featured: boolean;

  @ApiProperty({ enum: ProjectStatus, example: ProjectStatus.PUBLISHED })
  status: ProjectStatus;

  @ApiProperty({ enum: ProjectCategory, example: ProjectCategory.BACKEND })
  category: ProjectCategory;

  @ApiProperty({ example: 1 })
  sortOrder: number;

  @ApiProperty({ example: 1250 })
  viewsCount: number;

  @ApiProperty({ example: 84 })
  likesCount: number;

  @ApiPropertyOptional({ example: '2025-01-01T00:00:00.000Z' })
  startedAt?: Date | null;

  @ApiPropertyOptional({ example: '2025-06-01T00:00:00.000Z' })
  completedAt?: Date | null;

  @ApiProperty({ type: [ProjectSkillInfo] })
  technologies: ProjectSkillInfo[];

  @ApiProperty({ example: '2026-01-15T10:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2026-02-10T12:00:00.000Z' })
  updatedAt: Date;

  constructor(partial: Partial<ProjectEntity>) {
    Object.assign(this, partial);
    this.technologies = partial.technologies || [];
  }
}
