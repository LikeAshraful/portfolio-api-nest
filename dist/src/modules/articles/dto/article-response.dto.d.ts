import { ArticleAuthorInfo, ArticleEntity } from '../entities/article.entity';
export declare class ArticleResponseDto {
    id: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    coverImageUrl?: string | null;
    tags: string[];
    readingTimeMinutes: number;
    isPublished: boolean;
    publishedAt?: Date | null;
    viewsCount: number;
    authorId: string;
    author?: ArticleAuthorInfo | null;
    createdAt: Date;
    updatedAt: Date;
    static fromEntity(entity: ArticleEntity): ArticleResponseDto;
}
