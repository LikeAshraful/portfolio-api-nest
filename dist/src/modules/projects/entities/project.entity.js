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
exports.ProjectEntity = exports.ProjectSkillInfo = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../../database/generated/prisma/enums");
class ProjectSkillInfo {
    skillId;
    name;
    iconUrl;
    isPrimary;
}
exports.ProjectSkillInfo = ProjectSkillInfo;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], ProjectSkillInfo.prototype, "skillId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NestJS' }),
    __metadata("design:type", String)
], ProjectSkillInfo.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://cdn.example.com/nestjs.svg' }),
    __metadata("design:type", Object)
], ProjectSkillInfo.prototype, "iconUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], ProjectSkillInfo.prototype, "isPrimary", void 0);
class ProjectEntity {
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
    constructor(partial) {
        Object.assign(this, partial);
        this.technologies = partial.technologies || [];
    }
}
exports.ProjectEntity = ProjectEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Distributed Microservices Event Engine' }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'distributed-microservices-event-engine' }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'High-throughput event streaming platform with Kafka and NestJS' }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "summary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '# Distributed Event Engine\n\nDetailed architectural overview...' }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31' }),
    __metadata("design:type", Object)
], ProjectEntity.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://images.unsplash.com/photo-1518770660439-4636190af475' }),
    __metadata("design:type", Object)
], ProjectEntity.prototype, "bannerUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://engine.alexmorgan.dev' }),
    __metadata("design:type", Object)
], ProjectEntity.prototype, "liveDemoUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://github.com/alexmorgan/event-engine' }),
    __metadata("design:type", Object)
], ProjectEntity.prototype, "repoUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], ProjectEntity.prototype, "featured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.ProjectStatus, example: enums_1.ProjectStatus.PUBLISHED }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.ProjectCategory, example: enums_1.ProjectCategory.BACKEND }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1250 }),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "viewsCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 84 }),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "likesCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-01-01T00:00:00.000Z' }),
    __metadata("design:type", Object)
], ProjectEntity.prototype, "startedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-06-01T00:00:00.000Z' }),
    __metadata("design:type", Object)
], ProjectEntity.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ProjectSkillInfo] }),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "technologies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-01-15T10:00:00.000Z' }),
    __metadata("design:type", Date)
], ProjectEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-02-10T12:00:00.000Z' }),
    __metadata("design:type", Date)
], ProjectEntity.prototype, "updatedAt", void 0);
//# sourceMappingURL=project.entity.js.map