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
exports.ExperienceResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../../database/generated/prisma/enums");
class ExperienceResponseDto {
    id;
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
    createdAt;
    updatedAt;
    static fromEntity(entity) {
        const dto = new ExperienceResponseDto();
        dto.id = entity.id;
        dto.company = entity.company;
        dto.position = entity.position;
        dto.location = entity.location;
        dto.employmentType = entity.employmentType;
        dto.startDate = entity.startDate;
        dto.endDate = entity.endDate;
        dto.isCurrent = entity.isCurrent;
        dto.description = entity.description;
        dto.highlights = entity.highlights;
        dto.companyUrl = entity.companyUrl;
        dto.companyLogoUrl = entity.companyLogoUrl;
        dto.technologies = entity.technologies;
        dto.sortOrder = entity.sortOrder;
        dto.createdAt = entity.createdAt;
        dto.updatedAt = entity.updatedAt;
        return dto;
    }
}
exports.ExperienceResponseDto = ExperienceResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], ExperienceResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tech Corp Global' }),
    __metadata("design:type", String)
], ExperienceResponseDto.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Staff Backend Architect' }),
    __metadata("design:type", String)
], ExperienceResponseDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'San Francisco, CA (Remote)' }),
    __metadata("design:type", Object)
], ExperienceResponseDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.EmploymentType, example: enums_1.EmploymentType.FULL_TIME }),
    __metadata("design:type", String)
], ExperienceResponseDto.prototype, "employmentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], ExperienceResponseDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: null }),
    __metadata("design:type", Object)
], ExperienceResponseDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], ExperienceResponseDto.prototype, "isCurrent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Led core backend engineering for high-throughput distributed systems.' }),
    __metadata("design:type", String)
], ExperienceResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            'Architected event-driven microservices processing 50k req/sec',
            'Reduced p99 database latency by 45% via Redis caching layer',
        ],
        type: [String],
    }),
    __metadata("design:type", Array)
], ExperienceResponseDto.prototype, "highlights", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://techcorpglobal.com' }),
    __metadata("design:type", Object)
], ExperienceResponseDto.prototype, "companyUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://cdn.example.com/logos/techcorp.png' }),
    __metadata("design:type", Object)
], ExperienceResponseDto.prototype, "companyLogoUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['NestJS', 'PostgreSQL', 'Kafka', 'Kubernetes'], type: [String] }),
    __metadata("design:type", Array)
], ExperienceResponseDto.prototype, "technologies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ExperienceResponseDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], ExperienceResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], ExperienceResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=experience-response.dto.js.map