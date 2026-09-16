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
exports.CreateProjectDto = exports.ProjectSkillDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../database/generated/prisma/enums");
class ProjectSkillDto {
    skillId;
    isPrimary = false;
}
exports.ProjectSkillDto = ProjectSkillDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123e4567-e89b-12d3-a456-426614174000',
        description: 'UUID of the Skill',
    }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProjectSkillDto.prototype, "skillId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true, default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ProjectSkillDto.prototype, "isPrimary", void 0);
class CreateProjectDto {
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
    startedAt;
    completedAt;
    skills;
}
exports.CreateProjectDto = CreateProjectDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Distributed Microservices Event Engine' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'distributed-microservices-event-engine',
        description: 'URL-friendly slug (auto-generated from title if omitted)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'High-throughput event streaming platform with Kafka and NestJS',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "summary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '# Distributed Event Engine\n\nArchitecture details...',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "bannerUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://engine.alexmorgan.dev' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "liveDemoUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://github.com/alexmorgan/event-engine',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "repoUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true, default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProjectDto.prototype, "featured", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: enums_1.ProjectStatus,
        default: enums_1.ProjectStatus.PUBLISHED,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.ProjectStatus),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: enums_1.ProjectCategory,
        default: enums_1.ProjectCategory.BACKEND,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.ProjectCategory),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateProjectDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-01-01T00:00:00.000Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "startedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-06-01T00:00:00.000Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: [ProjectSkillDto],
        description: 'Associated skills/technologies',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ProjectSkillDto),
    __metadata("design:type", Array)
], CreateProjectDto.prototype, "skills", void 0);
//# sourceMappingURL=create-project.dto.js.map