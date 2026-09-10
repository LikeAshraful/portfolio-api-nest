import { PaginationQueryDto } from '../../../common/dto';
import { ContactStatus } from '../../../database/generated/prisma/enums';
export declare class ContactQueryDto extends PaginationQueryDto {
    status?: ContactStatus;
}
