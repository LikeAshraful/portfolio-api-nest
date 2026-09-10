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
exports.SkillResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../../database/generated/prisma/enums");
class SkillResponseDto {
    id;
    name;
    category;
    proficiency;
    yearsOfExperience;
    iconUrl;
    isFeatured;
    sortOrder;
    createdAt;
    updatedAt;
    static fromEntity(entity) {
        const dto = new SkillResponseDto();
        dto.id = entity.id;
        dto.name = entity.name;
        dto.category = entity.category;
        dto.proficiency = entity.proficiency;
        dto.yearsOfExperience = entity.yearsOfExperience;
        dto.iconUrl = entity.iconUrl;
        dto.isFeatured = entity.isFeatured;
        dto.sortOrder = entity.sortOrder;
        dto.createdAt = entity.createdAt;
        dto.updatedAt = entity.updatedAt;
        return dto;
    }
}
exports.SkillResponseDto = SkillResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], SkillResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'TypeScript' }),
    __metadata("design:type", String)
], SkillResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.SkillCategory, example: enums_1.SkillCategory.LANGUAGES }),
    __metadata("design:type", String)
], SkillResponseDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 95 }),
    __metadata("design:type", Number)
], SkillResponseDto.prototype, "proficiency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 6.5 }),
    __metadata("design:type", Number)
], SkillResponseDto.prototype, "yearsOfExperience", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://cdn.example.com/icons/typescript.svg' }),
    __metadata("design:type", Object)
], SkillResponseDto.prototype, "iconUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], SkillResponseDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], SkillResponseDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], SkillResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], SkillResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=skill-response.dto.js.map