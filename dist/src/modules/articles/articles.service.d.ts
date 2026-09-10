import { PaginatedResult } from '../../common/dto';
import { ArticleQueryDto, CreateArticleDto, UpdateArticleDto } from './dto';
import { ArticleEntity } from './entities/article.entity';
import { IArticleRepository } from './interfaces/article-repository.interface';
export declare class ArticlesService {
    private readonly articleRepository;
    constructor(articleRepository: IArticleRepository);
    private generateSlug;
    private calculateReadingTime;
    create(dto: CreateArticleDto, authorId: string): Promise<ArticleEntity>;
    findById(id: string): Promise<ArticleEntity>;
    findBySlug(slug: string): Promise<ArticleEntity>;
    findBySlugOrId(identifier: string): Promise<ArticleEntity>;
    findAll(query: ArticleQueryDto): Promise<PaginatedResult<ArticleEntity>>;
    update(id: string, dto: UpdateArticleDto): Promise<ArticleEntity>;
    delete(id: string): Promise<void>;
}
