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
exports.EducationResponseDto = exports.UpdateEducationDto = exports.CreateEducationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEducationDto {
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
}
exports.CreateEducationDto = CreateEducationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'University of California, Berkeley' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEducationDto.prototype, "institution", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bachelor of Science' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEducationDto.prototype, "degree", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Computer Science' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEducationDto.prototype, "fieldOfStudy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2016-09-01T00:00:00.000Z' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEducationDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2020-05-30T00:00:00.000Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateEducationDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: false, default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateEducationDto.prototype, "isCurrent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '3.9 / 4.0' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEducationDto.prototype, "grade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Specialized in Distributed Systems and Computer Architecture.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEducationDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://credentials.example.com/degree-123' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateEducationDto.prototype, "credentialUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateEducationDto.prototype, "sortOrder", void 0);
class UpdateEducationDto {
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
}
exports.UpdateEducationDto = UpdateEducationDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'University of California, Berkeley' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEducationDto.prototype, "institution", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Bachelor of Science' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEducationDto.prototype, "degree", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Computer Science' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEducationDto.prototype, "fieldOfStudy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2016-09-01T00:00:00.000Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateEducationDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2020-05-30T00:00:00.000Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateEducationDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateEducationDto.prototype, "isCurrent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '3.9 / 4.0' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEducationDto.prototype, "grade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Specialized in Distributed Systems and Computer Architecture.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEducationDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://credentials.example.com/degree-123' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateEducationDto.prototype, "credentialUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateEducationDto.prototype, "sortOrder", void 0);
class EducationResponseDto {
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
    static fromEntity(entity) {
        const dto = new EducationResponseDto();
        dto.id = entity.id;
        dto.institution = entity.institution;
        dto.degree = entity.degree;
        dto.fieldOfStudy = entity.fieldOfStudy;
        dto.startDate = entity.startDate;
        dto.endDate = entity.endDate;
        dto.isCurrent = entity.isCurrent;
        dto.grade = entity.grade;
        dto.description = entity.description;
        dto.credentialUrl = entity.credentialUrl;
        dto.sortOrder = entity.sortOrder;
        dto.createdAt = entity.createdAt;
        dto.updatedAt = entity.updatedAt;
        return dto;
    }
}
exports.EducationResponseDto = EducationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], EducationResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'University of California, Berkeley' }),
    __metadata("design:type", String)
], EducationResponseDto.prototype, "institution", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bachelor of Science' }),
    __metadata("design:type", String)
], EducationResponseDto.prototype, "degree", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Computer Science' }),
    __metadata("design:type", Object)
], EducationResponseDto.prototype, "fieldOfStudy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2016-09-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], EducationResponseDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2020-05-30T00:00:00.000Z' }),
    __metadata("design:type", Object)
], EducationResponseDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], EducationResponseDto.prototype, "isCurrent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '3.9 / 4.0' }),
    __metadata("design:type", Object)
], EducationResponseDto.prototype, "grade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Specialized in Distributed Systems and Algorithms.' }),
    __metadata("design:type", Object)
], EducationResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://credentials.example.com/degree-123' }),
    __metadata("design:type", Object)
], EducationResponseDto.prototype, "credentialUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], EducationResponseDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], EducationResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], EducationResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=education.dto.js.map