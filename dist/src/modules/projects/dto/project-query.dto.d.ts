import { PaginationQueryDto } from '../../../common/dto';
import { ProjectCategory, ProjectStatus } from '../../../database/generated/prisma/enums';
export declare class ProjectQueryDto extends PaginationQueryDto {
    category?: ProjectCategory;
    status?: ProjectStatus;
    featured?: boolean;
    skill?: string;
}
