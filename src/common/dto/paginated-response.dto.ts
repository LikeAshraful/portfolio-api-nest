import { ApiProperty } from '@nestjs/swagger';

export class PaginationMetaDto {
  @ApiProperty({ description: 'Current page number', example: 1 })
  page: number;

  @ApiProperty({ description: 'Items per page', example: 10 })
  limit: number;

  @ApiProperty({ description: 'Total item count', example: 42 })
  total: number;

  @ApiProperty({ description: 'Total page count', example: 5 })
  totalPages: number;

  @ApiProperty({ description: 'Has next page indicator', example: true })
  hasNextPage: boolean;

  @ApiProperty({ description: 'Has previous page indicator', example: false })
  hasPreviousPage: boolean;

  constructor(total: number, page: number, limit: number) {
    this.total = total;
    this.page = page;
    this.limit = limit;
    this.totalPages = Math.ceil(total / limit) || 1;
    this.hasNextPage = this.page < this.totalPages;
    this.hasPreviousPage = this.page > 1;
  }
}

export class PaginatedResult<T> {
  @ApiProperty({ description: 'List of items in the current page', isArray: true })
  items: T[];

  @ApiProperty({ description: 'Pagination metadata', type: PaginationMetaDto })
  meta: PaginationMetaDto;

  constructor(items: T[], total: number, page: number, limit: number) {
    this.items = items;
    this.meta = new PaginationMetaDto(total, page, limit);
  }
}
