import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ArticleAuthorInfo {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ example: 'Alex Morgan' })
  name: string;

  @ApiPropertyOptional({ example: 'https://example.com/avatar.jpg' })
  avatarUrl?: string | null;
}

export class ArticleEntity {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ example: 'Designing Resilient Distributed Systems with NestJS and Kafka' })
  title: string;

  @ApiProperty({ example: 'designing-resilient-distributed-systems-nestjs-kafka' })
  slug: string;

  @ApiProperty({ example: 'An in-depth architectural guide to building decoupled event pipelines.' })
  summary: string;

  @ApiProperty({ example: '# Designing Resilient Distributed Systems\n\n## Introduction...' })
  content: string;

  @ApiPropertyOptional({ example: 'https://images.unsplash.com/photo-1518770660439-4636190af475' })
  coverImageUrl?: string | null;

  @ApiProperty({ example: ['Distributed Systems', 'Kafka', 'NestJS', 'Architecture'], type: [String] })
  tags: string[];

  @ApiProperty({ example: 8, description: 'Calculated reading time in minutes' })
  readingTimeMinutes: number;

  @ApiProperty({ example: true })
  isPublished: boolean;

  @ApiPropertyOptional({ example: '2026-02-01T10:00:00.000Z' })
  publishedAt?: Date | null;

  @ApiProperty({ example: 450 })
  viewsCount: number;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  authorId: string;

  @ApiPropertyOptional({ type: ArticleAuthorInfo })
  author?: ArticleAuthorInfo | null;

  @ApiProperty({ example: '2026-02-01T10:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2026-02-01T10:00:00.000Z' })
  updatedAt: Date;

  constructor(partial: Partial<ArticleEntity>) {
    Object.assign(this, partial);
    this.tags = partial.tags || [];
  }
}
