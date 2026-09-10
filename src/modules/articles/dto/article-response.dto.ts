import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ArticleAuthorInfo, ArticleEntity } from '../entities/article.entity';

export class ArticleResponseDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ example: 'Designing Resilient Distributed Systems with NestJS and Kafka' })
  title: string;

  @ApiProperty({ example: 'designing-resilient-distributed-systems-nestjs-kafka' })
  slug: string;

  @ApiProperty({ example: 'An in-depth architectural guide to building decoupled event pipelines.' })
  summary: string;

  @ApiProperty({ example: '# Designing Resilient Distributed Systems\n\nFull markdown content...' })
  content: string;

  @ApiPropertyOptional({ example: 'https://images.unsplash.com/photo-1518770660439-4636190af475' })
  coverImageUrl?: string | null;

  @ApiProperty({ example: ['Distributed Systems', 'Kafka', 'NestJS'], type: [String] })
  tags: string[];

  @ApiProperty({ example: 8 })
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

  static fromEntity(entity: ArticleEntity): ArticleResponseDto {
    const dto = new ArticleResponseDto();
    dto.id = entity.id;
    dto.title = entity.title;
    dto.slug = entity.slug;
    dto.summary = entity.summary;
    dto.content = entity.content;
    dto.coverImageUrl = entity.coverImageUrl;
    dto.tags = entity.tags || [];
    dto.readingTimeMinutes = entity.readingTimeMinutes;
    dto.isPublished = entity.isPublished;
    dto.publishedAt = entity.publishedAt;
    dto.viewsCount = entity.viewsCount;
    dto.authorId = entity.authorId;
    dto.author = entity.author;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}
