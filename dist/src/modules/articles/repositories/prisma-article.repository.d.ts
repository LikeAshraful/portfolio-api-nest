import { PrismaService } from '../../../database/prisma.service';
import { PaginatedResult } from '../../../common/dto';
import { ArticleEntity } from '../entities/article.entity';
import { CreateArticleData, IArticleRepository, UpdateArticleData } from '../interfaces/article-repository.interface';
import { ArticleQueryDto } from '../dto/article-query.dto';
export declare class PrismaArticleRepository implements IArticleRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private mapToEntity;
    create(data: CreateArticleData): Promise<ArticleEntity>;
    findById(id: string): Promise<ArticleEntity | null>;
    findBySlug(slug: string): Promise<ArticleEntity | null>;
    findAll(query: ArticleQueryDto): Promise<PaginatedResult<ArticleEntity>>;
    update(id: string, data: UpdateArticleData): Promise<ArticleEntity>;
    delete(id: string): Promise<boolean>;
    incrementViews(id: string): Promise<void>;
}
