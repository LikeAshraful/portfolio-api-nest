import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { MetricType } from '../../../database/generated/prisma/enums';

export class TrackMetricDto {
  @ApiProperty({ enum: MetricType, example: MetricType.PAGE_VIEW })
  @IsEnum(MetricType)
  @IsNotEmpty()
  type: MetricType;

  @ApiPropertyOptional({ example: '/projects/distributed-event-engine' })
  @IsOptional()
  @IsString()
  identifier?: string;

  @ApiPropertyOptional({ example: 'https://github.com' })
  @IsOptional()
  @IsString()
  referrer?: string;
}
