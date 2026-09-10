import { PaginationQueryDto } from '../../../common/dto';
import { MetricType } from '../../../database/generated/prisma/enums';
export declare class MetricQueryDto extends PaginationQueryDto {
    type?: MetricType;
}
