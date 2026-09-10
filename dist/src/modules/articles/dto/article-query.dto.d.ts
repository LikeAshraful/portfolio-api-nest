import { PaginationQueryDto } from '../../../common/dto';
export declare class ArticleQueryDto extends PaginationQueryDto {
    tag?: string;
    published?: boolean;
}
