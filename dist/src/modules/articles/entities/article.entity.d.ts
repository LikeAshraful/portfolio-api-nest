export declare class ArticleAuthorInfo {
    id: string;
    name: string;
    avatarUrl?: string | null;
}
export declare class ArticleEntity {
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
    constructor(partial: Partial<ArticleEntity>);
}
