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
exports.CreateExperienceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../database/generated/prisma/enums");
class CreateExperienceDto {
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
exports.CreateExperienceDto = CreateExperienceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tech Corp Global' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateExperienceDto.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Staff Backend Architect' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateExperienceDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'San Francisco, CA (Remote)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExperienceDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.EmploymentType, default: enums_1.EmploymentType.FULL_TIME }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.EmploymentType),
    __metadata("design:type", String)
], CreateExperienceDto.prototype, "employmentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-01-01T00:00:00.000Z' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateExperienceDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-01-01T00:00:00.000Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateExperienceDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true, default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateExperienceDto.prototype, "isCurrent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Led core backend engineering for high-throughput distributed systems.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateExperienceDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: [
            'Architected event-driven microservices processing 50k req/sec',
            'Reduced p99 database latency by 45% via Redis caching layer',
        ],
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateExperienceDto.prototype, "highlights", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://techcorpglobal.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateExperienceDto.prototype, "companyUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://cdn.example.com/logos/techcorp.png' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateExperienceDto.prototype, "companyLogoUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: ['NestJS', 'PostgreSQL', 'Kafka', 'Kubernetes'], type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateExperienceDto.prototype, "technologies", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateExperienceDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=create-experience.dto.js.map