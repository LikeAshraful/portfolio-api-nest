import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { EmploymentType } from '../../../database/generated/prisma/enums';

export class ExperienceEntity {
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

  @ApiProperty({ example: ['NestJS', 'PostgreSQL', 'Kafka', 'Kubernetes', 'TypeScript'], type: [String] })
  technologies: string[];

  @ApiProperty({ example: 1 })
  sortOrder: number;

  @ApiProperty({ example: '2026-01-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2026-01-01T00:00:00.000Z' })
  updatedAt: Date;

  constructor(partial: Partial<ExperienceEntity>) {
    Object.assign(this, partial);
    this.highlights = partial.highlights || [];
    this.technologies = partial.technologies || [];
  }
}

export class EducationEntity {
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

  constructor(partial: Partial<EducationEntity>) {
    Object.assign(this, partial);
  }
}
