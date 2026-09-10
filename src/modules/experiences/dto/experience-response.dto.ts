import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { EmploymentType } from '../../../database/generated/prisma/enums';
import { ExperienceEntity } from '../entities/experience.entity';

export class ExperienceResponseDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ example: 'Tech Corp Global' })
  company: string;

  @ApiProperty({ example: 'Staff Backend Architect' })
  position: string;

  @ApiPropertyOptional({ example: 'San Francisco, CA (Remote)' })
  location?: string | null;

  @ApiProperty({ enum: EmploymentType, example: EmploymentType.FULL_TIME })
  employmentType: EmploymentType;

  @ApiProperty({ example: '2023-01-01T00:00:00.000Z' })
  startDate: Date;

  @ApiPropertyOptional({ example: null })
  endDate?: Date | null;

  @ApiProperty({ example: true })
  isCurrent: boolean;

  @ApiProperty({ example: 'Led core backend engineering for high-throughput distributed systems.' })
  description: string;

  @ApiProperty({
    example: [
      'Architected event-driven microservices processing 50k req/sec',
      'Reduced p99 database latency by 45% via Redis caching layer',
    ],
    type: [String],
  })
  highlights: string[];

  @ApiPropertyOptional({ example: 'https://techcorpglobal.com' })
  companyUrl?: string | null;

  @ApiPropertyOptional({ example: 'https://cdn.example.com/logos/techcorp.png' })
  companyLogoUrl?: string | null;

  @ApiProperty({ example: ['NestJS', 'PostgreSQL', 'Kafka', 'Kubernetes'], type: [String] })
  technologies: string[];

  @ApiProperty({ example: 1 })
  sortOrder: number;

  @ApiProperty({ example: '2026-01-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2026-01-01T00:00:00.000Z' })
  updatedAt: Date;

  static fromEntity(entity: ExperienceEntity): ExperienceResponseDto {
    const dto = new ExperienceResponseDto();
    dto.id = entity.id;
    dto.company = entity.company;
    dto.position = entity.position;
    dto.location = entity.location;
    dto.employmentType = entity.employmentType;
    dto.startDate = entity.startDate;
    dto.endDate = entity.endDate;
    dto.isCurrent = entity.isCurrent;
    dto.description = entity.description;
    dto.highlights = entity.highlights;
    dto.companyUrl = entity.companyUrl;
    dto.companyLogoUrl = entity.companyLogoUrl;
    dto.technologies = entity.technologies;
    dto.sortOrder = entity.sortOrder;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}
