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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperiencesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("../../common");
const guards_1 = require("../../common/guards");
const enums_1 = require("../../database/generated/prisma/enums");
const dto_1 = require("./dto");
const experiences_service_1 = require("./experiences.service");
let ExperiencesController = class ExperiencesController {
    experiencesService;
    constructor(experiencesService) {
        this.experiencesService = experiencesService;
    }
    async findAllExperiences(query) {
        const result = await this.experiencesService.findAllExperiences(query);
        return {
            items: result.items.map((e) => dto_1.ExperienceResponseDto.fromEntity(e)),
            meta: result.meta,
        };
    }
    async findAllEducations() {
        const educations = await this.experiencesService.findAllEducations();
        return educations.map((e) => dto_1.EducationResponseDto.fromEntity(e));
    }
    async findEducationById(id) {
        const education = await this.experiencesService.findEducationById(id);
        return dto_1.EducationResponseDto.fromEntity(education);
    }
    async findExperienceById(id) {
        const experience = await this.experiencesService.findExperienceById(id);
        return dto_1.ExperienceResponseDto.fromEntity(experience);
    }
    async createExperience(dto) {
        const experience = await this.experiencesService.createExperience(dto);
        return dto_1.ExperienceResponseDto.fromEntity(experience);
    }
    async updateExperience(id, dto) {
        const experience = await this.experiencesService.updateExperience(id, dto);
        return dto_1.ExperienceResponseDto.fromEntity(experience);
    }
    async deleteExperience(id) {
        await this.experiencesService.deleteExperience(id);
    }
    async createEducation(dto) {
        const education = await this.experiencesService.createEducation(dto);
        return dto_1.EducationResponseDto.fromEntity(education);
    }
    async updateEducation(id, dto) {
        const education = await this.experiencesService.updateEducation(id, dto);
        return dto_1.EducationResponseDto.fromEntity(education);
    }
    async deleteEducation(id) {
        await this.experiencesService.deleteEducation(id);
    }
};
exports.ExperiencesController = ExperiencesController;
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get professional work experience history' }),
    (0, common_2.ApiPaginatedResponse)(dto_1.ExperienceResponseDto),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_2.PaginationQueryDto]),
    __metadata("design:returntype", Promise)
], ExperiencesController.prototype, "findAllExperiences", null);
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Get)('education'),
    (0, swagger_1.ApiOperation)({ summary: 'Get academic background and degrees' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'List of education history',
        type: [dto_1.EducationResponseDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExperiencesController.prototype, "findAllEducations", null);
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Get)('education/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get education milestone by ID' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Education details',
        type: dto_1.EducationResponseDto,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExperiencesController.prototype, "findEducationById", null);
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get work experience by ID' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Experience details',
        type: dto_1.ExperienceResponseDto,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExperiencesController.prototype, "findExperienceById", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Add new work experience (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Work experience created successfully',
        type: dto_1.ExperienceResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateExperienceDto]),
    __metadata("design:returntype", Promise)
], ExperiencesController.prototype, "createExperience", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update work experience (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Work experience updated successfully',
        type: dto_1.ExperienceResponseDto,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateExperienceDto]),
    __metadata("design:returntype", Promise)
], ExperiencesController.prototype, "updateExperience", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete work experience (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NO_CONTENT, description: 'Experience deleted successfully' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExperiencesController.prototype, "deleteExperience", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Post)('education'),
    (0, swagger_1.ApiOperation)({ summary: 'Add education record (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Education record created successfully',
        type: dto_1.EducationResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateEducationDto]),
    __metadata("design:returntype", Promise)
], ExperiencesController.prototype, "createEducation", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Patch)('education/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update education record (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Education updated successfully',
        type: dto_1.EducationResponseDto,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateEducationDto]),
    __metadata("design:returntype", Promise)
], ExperiencesController.prototype, "updateEducation", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Delete)('education/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete education record (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NO_CONTENT, description: 'Education deleted successfully' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExperiencesController.prototype, "deleteEducation", null);
exports.ExperiencesController = ExperiencesController = __decorate([
    (0, swagger_1.ApiTags)('Experiences & Career'),
    (0, common_1.Controller)('experiences'),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    __metadata("design:paramtypes", [experiences_service_1.ExperiencesService])
], ExperiencesController);
//# sourceMappingURL=experiences.controller.js.map