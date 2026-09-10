import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

export class CreateArticleDto {
  @ApiProperty({ example: 'Designing Resilient Distributed Systems with NestJS and Kafka' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ example: 'designing-resilient-distributed-systems-nestjs-kafka' })
  @IsOptional()
  @IsString()
  slug?: string;

  @ApiProperty({ example: 'An in-depth architectural guide to building decoupled event pipelines.' })
  @IsString()
  @IsNotEmpty()
  summary: string;

  @ApiProperty({ example: '# Designing Resilient Distributed Systems\n\nFull article markdown...' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiPropertyOptional({ example: 'https://images.unsplash.com/photo-1518770660439-4636190af475' })
  @IsOptional()
  @IsUrl()
  coverImageUrl?: string;

  @ApiPropertyOptional({
    example: ['Distributed Systems', 'Kafka', 'NestJS'],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiPropertyOptional({ example: 8 })
  @IsOptional()
  @IsInt()
  @Min(1)
  readingTimeMinutes?: number;

  @ApiPropertyOptional({ example: true, default: false })
  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;

  @ApiPropertyOptional({ example: '2026-02-01T10:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  publishedAt?: string;
}
