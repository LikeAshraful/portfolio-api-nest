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
exports.ArticleResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const article_entity_1 = require("../entities/article.entity");
class ArticleResponseDto {
    id;
    title;
    slug;
    summary;
    content;
    coverImageUrl;
    tags;
    readingTimeMinutes;
    isPublished;
    publishedAt;
    viewsCount;
    authorId;
    author;
    createdAt;
    updatedAt;
    static fromEntity(entity) {
        const dto = new ArticleResponseDto();
        dto.id = entity.id;
        dto.title = entity.title;
        dto.slug = entity.slug;
        dto.summary = entity.summary;
        dto.content = entity.content;
        dto.coverImageUrl = entity.coverImageUrl;
        dto.tags = entity.tags || [];
        dto.readingTimeMinutes = entity.readingTimeMinutes;
        dto.isPublished = entity.isPublished;
        dto.publishedAt = entity.publishedAt;
        dto.viewsCount = entity.viewsCount;
        dto.authorId = entity.authorId;
        dto.author = entity.author;
        dto.createdAt = entity.createdAt;
        dto.updatedAt = entity.updatedAt;
        return dto;
    }
}
exports.ArticleResponseDto = ArticleResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], ArticleResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Designing Resilient Distributed Systems with NestJS and Kafka' }),
    __metadata("design:type", String)
], ArticleResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'designing-resilient-distributed-systems-nestjs-kafka' }),
    __metadata("design:type", String)
], ArticleResponseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'An in-depth architectural guide to building decoupled event pipelines.' }),
    __metadata("design:type", String)
], ArticleResponseDto.prototype, "summary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '# Designing Resilient Distributed Systems\n\nFull markdown content...' }),
    __metadata("design:type", String)
], ArticleResponseDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://images.unsplash.com/photo-1518770660439-4636190af475' }),
    __metadata("design:type", Object)
], ArticleResponseDto.prototype, "coverImageUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Distributed Systems', 'Kafka', 'NestJS'], type: [String] }),
    __metadata("design:type", Array)
], ArticleResponseDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 8 }),
    __metadata("design:type", Number)
], ArticleResponseDto.prototype, "readingTimeMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], ArticleResponseDto.prototype, "isPublished", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2026-02-01T10:00:00.000Z' }),
    __metadata("design:type", Object)
], ArticleResponseDto.prototype, "publishedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 450 }),
    __metadata("design:type", Number)
], ArticleResponseDto.prototype, "viewsCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], ArticleResponseDto.prototype, "authorId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: article_entity_1.ArticleAuthorInfo }),
    __metadata("design:type", Object)
], ArticleResponseDto.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-02-01T10:00:00.000Z' }),
    __metadata("design:type", Date)
], ArticleResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-02-01T10:00:00.000Z' }),
    __metadata("design:type", Date)
], ArticleResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=article-response.dto.js.map