export declare class PaginationMetaDto {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    constructor(total: number, page: number, limit: number);
}
export declare class PaginatedResult<T> {
    items: T[];
    meta: PaginationMetaDto;
    constructor(items: T[], total: number, page: number, limit: number);
}
