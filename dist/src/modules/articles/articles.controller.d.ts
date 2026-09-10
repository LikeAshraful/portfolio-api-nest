import { AuthenticatedUser } from '../../common';
import { ArticleQueryDto, ArticleResponseDto, CreateArticleDto, UpdateArticleDto } from './dto';
import { ArticlesService } from './articles.service';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    findAll(query: ArticleQueryDto): Promise<{
        items: ArticleResponseDto[];
        meta: import("../../common").PaginationMetaDto;
    }>;
    findBySlugOrId(slugOrId: string): Promise<ArticleResponseDto>;
    create(currentUser: AuthenticatedUser, dto: CreateArticleDto): Promise<ArticleResponseDto>;
    update(id: string, dto: UpdateArticleDto): Promise<ArticleResponseDto>;
    delete(id: string): Promise<void>;
}
