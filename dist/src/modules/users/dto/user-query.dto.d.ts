import { PaginationQueryDto } from '../../../common/dto';
import { Role } from '../../../database/generated/prisma/enums';
export declare class UserQueryDto extends PaginationQueryDto {
    role?: Role;
    isActive?: boolean;
}
