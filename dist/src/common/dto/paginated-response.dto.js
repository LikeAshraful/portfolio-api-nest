"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedResult = exports.PaginationMetaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class PaginationMetaDto {
    page;
    limit;
    total;
    totalPages;
    hasNextPage;
    hasPreviousPage;
    constructor(total, page, limit) {
        this.total = total;
        this.page = page;
        this.limit = limit;
        this.totalPages = Math.ceil(total / limit) || 1;
        this.hasNextPage = this.page < this.totalPages;
        this.hasPreviousPage = this.page > 1;
    }
}
exports.PaginationMetaDto = PaginationMetaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number', example: 1 }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page', example: 10 }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total item count', example: 42 }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total page count', example: 5 }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "totalPages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Has next page indicator', example: true }),
    __metadata("design:type", Boolean)
], PaginationMetaDto.prototype, "hasNextPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Has previous page indicator', example: false }),
    __metadata("design:type", Boolean)
], PaginationMetaDto.prototype, "hasPreviousPage", void 0);
class PaginatedResult {
    items;
    meta;
    constructor(items, total, page, limit) {
        this.items = items;
        this.meta = new PaginationMetaDto(total, page, limit);
    }
}
exports.PaginatedResult = PaginatedResult;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of items in the current page', isArray: true }),
    __metadata("design:type", Array)
], PaginatedResult.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pagination metadata', type: PaginationMetaDto }),
    __metadata("design:type", PaginationMetaDto)
], PaginatedResult.prototype, "meta", void 0);
//# sourceMappingURL=paginated-response.dto.js.map