export declare class CreateArticleDto {
    title: string;
    slug?: string;
    summary: string;
    content: string;
    coverImageUrl?: string;
    tags?: string[];
    readingTimeMinutes?: number;
    isPublished?: boolean;
    publishedAt?: string;
}
