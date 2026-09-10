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
exports.UpdateProjectDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../database/generated/prisma/enums");
const create_project_dto_1 = require("./create-project.dto");
class UpdateProjectDto {
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
exports.UpdateProjectDto = UpdateProjectDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Distributed Microservices Event Engine' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProjectDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'distributed-microservices-event-engine' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProjectDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'High-throughput event streaming platform with Kafka and NestJS' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProjectDto.prototype, "summary", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '# Distributed Event Engine\n\nArchitecture details...' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProjectDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateProjectDto.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://images.unsplash.com/photo-1518770660439-4636190af475' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateProjectDto.prototype, "bannerUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://engine.alexmorgan.dev' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateProjectDto.prototype, "liveDemoUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://github.com/alexmorgan/event-engine' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateProjectDto.prototype, "repoUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateProjectDto.prototype, "featured", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.ProjectStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.ProjectStatus),
    __metadata("design:type", String)
], UpdateProjectDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.ProjectCategory }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.ProjectCategory),
    __metadata("design:type", String)
], UpdateProjectDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateProjectDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-01-01T00:00:00.000Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateProjectDto.prototype, "startedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-06-01T00:00:00.000Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateProjectDto.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [create_project_dto_1.ProjectSkillDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_project_dto_1.ProjectSkillDto),
    __metadata("design:type", Array)
], UpdateProjectDto.prototype, "skills", void 0);
//# sourceMappingURL=update-project.dto.js.map