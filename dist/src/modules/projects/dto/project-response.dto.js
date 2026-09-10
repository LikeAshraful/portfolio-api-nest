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
exports.ProjectResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../../database/generated/prisma/enums");
const project_entity_1 = require("../entities/project.entity");
class ProjectResponseDto {
    id;
    title;
    slug;
    summary;
    description;
    thumbnailUrl;
    bannerUrl;
    liveDemoUrl;
    repoUrl;
    featured;
    status;
    category;
    sortOrder;
    viewsCount;
    likesCount;
    startedAt;
    completedAt;
    technologies;
    createdAt;
    updatedAt;
    static fromEntity(entity) {
        const dto = new ProjectResponseDto();
        dto.id = entity.id;
        dto.title = entity.title;
        dto.slug = entity.slug;
        dto.summary = entity.summary;
        dto.description = entity.description;
        dto.thumbnailUrl = entity.thumbnailUrl;
        dto.bannerUrl = entity.bannerUrl;
        dto.liveDemoUrl = entity.liveDemoUrl;
        dto.repoUrl = entity.repoUrl;
        dto.featured = entity.featured;
        dto.status = entity.status;
        dto.category = entity.category;
        dto.sortOrder = entity.sortOrder;
        dto.viewsCount = entity.viewsCount;
        dto.likesCount = entity.likesCount;
        dto.startedAt = entity.startedAt;
        dto.completedAt = entity.completedAt;
        dto.technologies = entity.technologies || [];
        dto.createdAt = entity.createdAt;
        dto.updatedAt = entity.updatedAt;
        return dto;
    }
}
exports.ProjectResponseDto = ProjectResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], ProjectResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Distributed Microservices Event Engine' }),
    __metadata("design:type", String)
], ProjectResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'distributed-microservices-event-engine' }),
    __metadata("design:type", String)
], ProjectResponseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'High-throughput event streaming platform with Kafka and NestJS' }),
    __metadata("design:type", String)
], ProjectResponseDto.prototype, "summary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '# Distributed Event Engine\n\nArchitecture details...' }),
    __metadata("design:type", String)
], ProjectResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31' }),
    __metadata("design:type", Object)
], ProjectResponseDto.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://images.unsplash.com/photo-1518770660439-4636190af475' }),
    __metadata("design:type", Object)
], ProjectResponseDto.prototype, "bannerUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://engine.alexmorgan.dev' }),
    __metadata("design:type", Object)
], ProjectResponseDto.prototype, "liveDemoUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://github.com/alexmorgan/event-engine' }),
    __metadata("design:type", Object)
], ProjectResponseDto.prototype, "repoUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], ProjectResponseDto.prototype, "featured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.ProjectStatus, example: enums_1.ProjectStatus.PUBLISHED }),
    __metadata("design:type", String)
], ProjectResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.ProjectCategory, example: enums_1.ProjectCategory.BACKEND }),
    __metadata("design:type", String)
], ProjectResponseDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ProjectResponseDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1250 }),
    __metadata("design:type", Number)
], ProjectResponseDto.prototype, "viewsCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 84 }),
    __metadata("design:type", Number)
], ProjectResponseDto.prototype, "likesCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-01-01T00:00:00.000Z' }),
    __metadata("design:type", Object)
], ProjectResponseDto.prototype, "startedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-06-01T00:00:00.000Z' }),
    __metadata("design:type", Object)
], ProjectResponseDto.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [project_entity_1.ProjectSkillInfo] }),
    __metadata("design:type", Array)
], ProjectResponseDto.prototype, "technologies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-01-15T10:00:00.000Z' }),
    __metadata("design:type", Date)
], ProjectResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-02-10T12:00:00.000Z' }),
    __metadata("design:type", Date)
], ProjectResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=project-response.dto.js.map