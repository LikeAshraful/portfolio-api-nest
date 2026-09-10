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
exports.EducationEntity = exports.ExperienceEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../../database/generated/prisma/enums");
class ExperienceEntity {
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
    constructor(partial) {
        Object.assign(this, partial);
        this.highlights = partial.highlights || [];
        this.technologies = partial.technologies || [];
    }
}
exports.ExperienceEntity = ExperienceEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], ExperienceEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tech Corp Global' }),
    __metadata("design:type", String)
], ExperienceEntity.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Staff Backend Architect' }),
    __metadata("design:type", String)
], ExperienceEntity.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'San Francisco, CA (Remote)' }),
    __metadata("design:type", Object)
], ExperienceEntity.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.EmploymentType, example: enums_1.EmploymentType.FULL_TIME }),
    __metadata("design:type", String)
], ExperienceEntity.prototype, "employmentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], ExperienceEntity.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: null }),
    __metadata("design:type", Object)
], ExperienceEntity.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], ExperienceEntity.prototype, "isCurrent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Led core backend engineering for high-throughput distributed systems.' }),
    __metadata("design:type", String)
], ExperienceEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            'Architected event-driven microservices processing 50k req/sec',
            'Reduced p99 database latency by 45% via Redis caching layer',
        ],
        type: [String],
    }),
    __metadata("design:type", Array)
], ExperienceEntity.prototype, "highlights", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://techcorpglobal.com' }),
    __metadata("design:type", Object)
], ExperienceEntity.prototype, "companyUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://cdn.example.com/logos/techcorp.png' }),
    __metadata("design:type", Object)
], ExperienceEntity.prototype, "companyLogoUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['NestJS', 'PostgreSQL', 'Kafka', 'Kubernetes', 'TypeScript'], type: [String] }),
    __metadata("design:type", Array)
], ExperienceEntity.prototype, "technologies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ExperienceEntity.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], ExperienceEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], ExperienceEntity.prototype, "updatedAt", void 0);
class EducationEntity {
    id;
    institution;
    degree;
    fieldOfStudy;
    startDate;
    endDate;
    isCurrent;
    grade;
    description;
    credentialUrl;
    sortOrder;
    createdAt;
    updatedAt;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.EducationEntity = EducationEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], EducationEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'University of California, Berkeley' }),
    __metadata("design:type", String)
], EducationEntity.prototype, "institution", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bachelor of Science' }),
    __metadata("design:type", String)
], EducationEntity.prototype, "degree", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Computer Science' }),
    __metadata("design:type", Object)
], EducationEntity.prototype, "fieldOfStudy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2016-09-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], EducationEntity.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2020-05-30T00:00:00.000Z' }),
    __metadata("design:type", Object)
], EducationEntity.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], EducationEntity.prototype, "isCurrent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '3.9 / 4.0' }),
    __metadata("design:type", Object)
], EducationEntity.prototype, "grade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Specialized in Distributed Systems and Algorithms.' }),
    __metadata("design:type", Object)
], EducationEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://credentials.example.com/degree-123' }),
    __metadata("design:type", Object)
], EducationEntity.prototype, "credentialUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], EducationEntity.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], EducationEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], EducationEntity.prototype, "updatedAt", void 0);
//# sourceMappingURL=experience.entity.js.map