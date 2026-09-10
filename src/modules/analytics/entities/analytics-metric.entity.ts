import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MetricType } from '../../../database/generated/prisma/enums';

export class AnalyticsMetricEntity {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ enum: MetricType, example: MetricType.PAGE_VIEW })
  type: MetricType;

  @ApiPropertyOptional({ example: '/projects/event-engine' })
  identifier?: string | null;

  @ApiPropertyOptional({ example: 'https://news.ycombinator.com' })
  referrer?: string | null;

  @ApiPropertyOptional({ example: 'Mozilla/5.0...' })
  userAgent?: string | null;

  @ApiProperty({ example: '2026-09-09T10:00:00.000Z' })
  createdAt: Date;

  constructor(partial: Partial<AnalyticsMetricEntity>) {
    Object.assign(this, partial);
  }
}
