import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { PaginatedResult } from '../../../common/dto';
import { ArticleAuthorInfo, ArticleEntity } from '../entities/article.entity';
import {
  CreateArticleData,
  IArticleRepository,
  UpdateArticleData,
} from '../interfaces/article-repository.interface';
import { ArticleQueryDto } from '../dto/article-query.dto';
import { Prisma } from '../../../database/generated/prisma/client';

type PrismaArticleWithAuthor = Prisma.ArticleGetPayload<{
  include: {
    author: {
      select: {
        id: true;
        name: true;
        avatarUrl: true;
      };
    };
  };
}>;

@Injectable()
export class PrismaArticleRepository implements IArticleRepository {
  constructor(private readonly prisma: PrismaService) {}

  private mapToEntity(article: PrismaArticleWithAuthor): ArticleEntity {
    const author: ArticleAuthorInfo | null = article.author
      ? {
          id: article.author.id,
          name: article.author.name,
          avatarUrl: article.author.avatarUrl,
        }
      : null;

    return new ArticleEntity({
      ...article,
      author,
    });
  }

  async create(data: CreateArticleData): Promise<ArticleEntity> {
    const article = await this.prisma.article.create({
      data: {
        title: data.title,
        slug: data.slug,
        summary: data.summary,
        content: data.content,
        coverImageUrl: data.coverImageUrl,
        tags: data.tags ?? [],
        readingTimeMinutes: data.readingTimeMinutes ?? 5,
        isPublished: data.isPublished ?? false,
        publishedAt: data.publishedAt,
        authorId: data.authorId,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
      },
    });

    return this.mapToEntity(article);
  }

  async findById(id: string): Promise<ArticleEntity | null> {
    const article = await this.prisma.article.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
      },
    });

    return article ? this.mapToEntity(article) : null;
  }

  async findBySlug(slug: string): Promise<ArticleEntity | null> {
    const article = await this.prisma.article.findUnique({
      where: { slug },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
      },
    });

    return article ? this.mapToEntity(article) : null;
  }

  async findAll(query: ArticleQueryDto): Promise<PaginatedResult<ArticleEntity>> {
    const where: Prisma.ArticleWhereInput = {};

    if (query.published !== undefined) {
      where.isPublished = query.published;
    }

    if (query.tag) {
      where.tags = { has: query.tag };
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { summary: { contains: query.search, mode: 'insensitive' } },
        { content: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const orderBy: Prisma.ArticleOrderByWithRelationInput = {
      [query.sortBy || 'createdAt']: query.sortOrder || 'desc',
    };

    const [total, articles] = await Promise.all([
      this.prisma.article.count({ where }),
      this.prisma.article.findMany({
        where,
        skip: query.skip,
        take: query.limit,
        orderBy,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              avatarUrl: true,
            },
          },
        },
      }),
    ]);

    const entities = articles.map((a) => this.mapToEntity(a));
    return new PaginatedResult(entities, total, query.page, query.limit);
  }

  async update(id: string, data: UpdateArticleData): Promise<ArticleEntity> {
    const article = await this.prisma.article.update({
      where: { id },
      data: {
        ...(data.title !== undefined ? { title: data.title } : {}),
        ...(data.slug !== undefined ? { slug: data.slug } : {}),
        ...(data.summary !== undefined ? { summary: data.summary } : {}),
        ...(data.content !== undefined ? { content: data.content } : {}),
        ...(data.coverImageUrl !== undefined ? { coverImageUrl: data.coverImageUrl } : {}),
        ...(data.tags !== undefined ? { tags: data.tags } : {}),
        ...(data.readingTimeMinutes !== undefined ? { readingTimeMinutes: data.readingTimeMinutes } : {}),
        ...(data.isPublished !== undefined ? { isPublished: data.isPublished } : {}),
        ...(data.publishedAt !== undefined ? { publishedAt: data.publishedAt } : {}),
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
      },
    });

    return this.mapToEntity(article);
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.article.delete({
      where: { id },
    });
    return true;
  }

  async incrementViews(id: string): Promise<void> {
    await this.prisma.article.update({
      where: { id },
      data: { viewsCount: { increment: 1 } },
    });
  }
}
