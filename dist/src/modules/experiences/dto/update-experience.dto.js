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
exports.UpdateExperienceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../database/generated/prisma/enums");
class UpdateExperienceDto {
    company;
    position;
    location;
    employmentType;
    startDate;
    endDate;
    isCurrent;
    description;
    highlights;
    companyUrl;
    companyLogoUrl;
    technologies;
    sortOrder;
}
exports.UpdateExperienceDto = UpdateExperienceDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Tech Corp Global' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateExperienceDto.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Staff Backend Architect' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateExperienceDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'San Francisco, CA' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateExperienceDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.EmploymentType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.EmploymentType),
    __metadata("design:type", String)
], UpdateExperienceDto.prototype, "employmentType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2023-01-01T00:00:00.000Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateExperienceDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-01-01T00:00:00.000Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateExperienceDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateExperienceDto.prototype, "isCurrent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Led core backend engineering for high-throughput distributed systems.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateExperienceDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: ['Architected event-driven microservices processing 50k req/sec'],
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdateExperienceDto.prototype, "highlights", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://techcorpglobal.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateExperienceDto.prototype, "companyUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://cdn.example.com/logos/techcorp.png' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateExperienceDto.prototype, "companyLogoUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: ['NestJS', 'PostgreSQL', 'Kafka'], type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdateExperienceDto.prototype, "technologies", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateExperienceDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=update-experience.dto.js.map