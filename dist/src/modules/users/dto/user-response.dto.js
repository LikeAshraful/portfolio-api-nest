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
exports.UserResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../../database/generated/prisma/enums");
class UserResponseDto {
    id;
    email;
    name;
    title;
    bio;
    avatarUrl;
    location;
    githubUrl;
    linkedinUrl;
    twitterUrl;
    websiteUrl;
    resumeUrl;
    role;
    isActive;
    createdAt;
    updatedAt;
    static fromEntity(entity) {
        const dto = new UserResponseDto();
        dto.id = entity.id;
        dto.email = entity.email;
        dto.name = entity.name;
        dto.title = entity.title;
        dto.bio = entity.bio;
        dto.avatarUrl = entity.avatarUrl;
        dto.location = entity.location;
        dto.githubUrl = entity.githubUrl;
        dto.linkedinUrl = entity.linkedinUrl;
        dto.twitterUrl = entity.twitterUrl;
        dto.websiteUrl = entity.websiteUrl;
        dto.resumeUrl = entity.resumeUrl;
        dto.role = entity.role;
        dto.isActive = entity.isActive;
        dto.createdAt = entity.createdAt;
        dto.updatedAt = entity.updatedAt;
        return dto;
    }
}
exports.UserResponseDto = UserResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'alex@example.com' }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alex Morgan' }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Senior Backend & Cloud Architect' }),
    __metadata("design:type", Object)
], UserResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Passionate about distributed systems and clean code.',
    }),
    __metadata("design:type", Object)
], UserResponseDto.prototype, "bio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://example.com/avatar.jpg' }),
    __metadata("design:type", Object)
], UserResponseDto.prototype, "avatarUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'San Francisco, CA' }),
    __metadata("design:type", Object)
], UserResponseDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://github.com/alexmorgan' }),
    __metadata("design:type", Object)
], UserResponseDto.prototype, "githubUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://linkedin.com/in/alexmorgan' }),
    __metadata("design:type", Object)
], UserResponseDto.prototype, "linkedinUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://twitter.com/alexmorgan' }),
    __metadata("design:type", Object)
], UserResponseDto.prototype, "twitterUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://alexmorgan.dev' }),
    __metadata("design:type", Object)
], UserResponseDto.prototype, "websiteUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://alexmorgan.dev/resume.pdf' }),
    __metadata("design:type", Object)
], UserResponseDto.prototype, "resumeUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.Role, example: enums_1.Role.ADMIN }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], UserResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-09-09T10:00:00.000Z' }),
    __metadata("design:type", Date)
], UserResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-09-09T10:00:00.000Z' }),
    __metadata("design:type", Date)
], UserResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=user-response.dto.js.map