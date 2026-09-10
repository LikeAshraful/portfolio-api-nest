import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PaginatedResult } from '../../common/dto';
import { ArticleQueryDto, CreateArticleDto, UpdateArticleDto } from './dto';
import { ArticleEntity } from './entities/article.entity';
import { ARTICLE_REPOSITORY, IArticleRepository } from './interfaces/article-repository.interface';

@Injectable()
export class ArticlesService {
  constructor(
    @Inject(ARTICLE_REPOSITORY)
    private readonly articleRepository: IArticleRepository,
  ) {}

  private generateSlug(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  private calculateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
  }

  async create(dto: CreateArticleDto, authorId: string): Promise<ArticleEntity> {
    const slug = dto.slug ? this.generateSlug(dto.slug) : this.generateSlug(dto.title);

    const existing = await this.articleRepository.findBySlug(slug);
    if (existing) {
      throw new ConflictException(`Article with slug "${slug}" already exists`);
    }

    const readingTime = dto.readingTimeMinutes ?? this.calculateReadingTime(dto.content);
    const isPublished = dto.isPublished ?? false;
    const publishedAt = isPublished
      ? dto.publishedAt
        ? new Date(dto.publishedAt)
        : new Date()
      : undefined;

    return this.articleRepository.create({
      title: dto.title,
      slug,
      summary: dto.summary,
      content: dto.content,
      coverImageUrl: dto.coverImageUrl,
      tags: dto.tags,
      readingTimeMinutes: readingTime,
      isPublished,
      publishedAt,
      authorId,
    });
  }

  async findById(id: string): Promise<ArticleEntity> {
    const article = await this.articleRepository.findById(id);
    if (!article) {
      throw new NotFoundException(`Article with ID "${id}" not found`);
    }
    return article;
  }

  async findBySlug(slug: string): Promise<ArticleEntity> {
    const article = await this.articleRepository.findBySlug(slug);
    if (!article) {
      throw new NotFoundException(`Article with slug "${slug}" not found`);
    }
    return article;
  }

  async findBySlugOrId(identifier: string): Promise<ArticleEntity> {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      identifier,
    );

    const article = isUuid
      ? await this.articleRepository.findById(identifier)
      : await this.articleRepository.findBySlug(identifier);

    if (!article) {
      throw new NotFoundException(`Article "${identifier}" not found`);
    }

    this.articleRepository.incrementViews(article.id).catch(() => {});

    return article;
  }

  async findAll(query: ArticleQueryDto): Promise<PaginatedResult<ArticleEntity>> {
    return this.articleRepository.findAll(query);
  }

  async update(id: string, dto: UpdateArticleDto): Promise<ArticleEntity> {
    const existingArticle = await this.findById(id);

    let slug: string | undefined = undefined;
    if (dto.slug || dto.title) {
      slug = dto.slug ? this.generateSlug(dto.slug) : dto.title ? this.generateSlug(dto.title) : undefined;
      if (slug) {
        const existing = await this.articleRepository.findBySlug(slug);
        if (existing && existing.id !== id) {
          throw new ConflictException(`Article with slug "${slug}" already exists`);
        }
      }
    }

    const readingTime = dto.content ? this.calculateReadingTime(dto.content) : dto.readingTimeMinutes;
    const isPublished = dto.isPublished !== undefined ? dto.isPublished : existingArticle.isPublished;
    let publishedAt: Date | undefined | null = undefined;

    if (dto.publishedAt) {
      publishedAt = new Date(dto.publishedAt);
    } else if (dto.isPublished === true && !existingArticle.publishedAt) {
      publishedAt = new Date();
    }

    return this.articleRepository.update(id, {
      title: dto.title,
      slug,
      summary: dto.summary,
      content: dto.content,
      coverImageUrl: dto.coverImageUrl,
      tags: dto.tags,
      readingTimeMinutes: readingTime,
      isPublished: dto.isPublished,
      publishedAt,
    });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.articleRepository.delete(id);
  }
}
