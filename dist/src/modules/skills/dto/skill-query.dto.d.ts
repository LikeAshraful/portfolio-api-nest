import { PaginationQueryDto } from '../../../common/dto';
import { SkillCategory } from '../../../database/generated/prisma/enums';
export declare class SkillQueryDto extends PaginationQueryDto {
    category?: SkillCategory;
    featured?: boolean;
}
