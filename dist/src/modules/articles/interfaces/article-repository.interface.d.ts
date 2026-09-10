import { PaginatedResult } from '../../../common/dto';
import { ArticleEntity } from '../entities/article.entity';
import { ArticleQueryDto } from '../dto/article-query.dto';
export declare const ARTICLE_REPOSITORY: unique symbol;
export interface CreateArticleData {
    title: string;
    slug: string;
    summary: string;
    content: string;
    coverImageUrl?: string;
    tags?: string[];
    readingTimeMinutes?: number;
    isPublished?: boolean;
    publishedAt?: Date;
    authorId: string;
}
export interface UpdateArticleData {
    title?: string;
    slug?: string;
    summary?: string;
    content?: string;
    coverImageUrl?: string | null;
    tags?: string[];
    readingTimeMinutes?: number;
    isPublished?: boolean;
    publishedAt?: Date | null;
}
export interface IArticleRepository {
    create(data: CreateArticleData): Promise<ArticleEntity>;
    findById(id: string): Promise<ArticleEntity | null>;
    findBySlug(slug: string): Promise<ArticleEntity | null>;
    findAll(query: ArticleQueryDto): Promise<PaginatedResult<ArticleEntity>>;
    update(id: string, data: UpdateArticleData): Promise<ArticleEntity>;
    delete(id: string): Promise<boolean>;
    incrementViews(id: string): Promise<void>;
}
