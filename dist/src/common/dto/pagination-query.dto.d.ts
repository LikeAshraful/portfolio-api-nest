export declare enum SortOrder {
    ASC = "asc",
    DESC = "desc"
}
export declare class PaginationQueryDto {
    page: number;
    limit: number;
    sortBy: string;
    sortOrder: SortOrder;
    search?: string;
    get skip(): number;
}
