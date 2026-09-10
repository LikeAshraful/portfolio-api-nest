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
exports.SkillsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("../../common");
const guards_1 = require("../../common/guards");
const enums_1 = require("../../database/generated/prisma/enums");
const dto_1 = require("./dto");
const skills_service_1 = require("./skills.service");
let SkillsController = class SkillsController {
    skillsService;
    constructor(skillsService) {
        this.skillsService = skillsService;
    }
    async findGroupedByCategory() {
        const grouped = await this.skillsService.findGroupedByCategory();
        const result = {};
        for (const [category, skills] of Object.entries(grouped)) {
            result[category] = skills.map((s) => dto_1.SkillResponseDto.fromEntity(s));
        }
        return result;
    }
    async findAll(query) {
        const result = await this.skillsService.findAll(query);
        return {
            items: result.items.map((s) => dto_1.SkillResponseDto.fromEntity(s)),
            meta: result.meta,
        };
    }
    async findById(id) {
        const skill = await this.skillsService.findById(id);
        return dto_1.SkillResponseDto.fromEntity(skill);
    }
    async create(dto) {
        const skill = await this.skillsService.create(dto);
        return dto_1.SkillResponseDto.fromEntity(skill);
    }
    async update(id, dto) {
        const skill = await this.skillsService.update(id, dto);
        return dto_1.SkillResponseDto.fromEntity(skill);
    }
    async delete(id) {
        await this.skillsService.delete(id);
    }
};
exports.SkillsController = SkillsController;
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Get)('grouped'),
    (0, swagger_1.ApiOperation)({ summary: 'Get skills grouped by technical category' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Skills dictionary grouped by category',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SkillsController.prototype, "findGroupedByCategory", null);
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all skills with pagination and filters' }),
    (0, common_2.ApiPaginatedResponse)(dto_1.SkillResponseDto),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SkillQueryDto]),
    __metadata("design:returntype", Promise)
], SkillsController.prototype, "findAll", null);
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get skill by ID' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Skill details',
        type: dto_1.SkillResponseDto,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SkillsController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new skill (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Skill created successfully',
        type: dto_1.SkillResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateSkillDto]),
    __metadata("design:returntype", Promise)
], SkillsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update skill by ID (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Skill updated successfully',
        type: dto_1.SkillResponseDto,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateSkillDto]),
    __metadata("design:returntype", Promise)
], SkillsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete skill by ID (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Skill deleted successfully',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SkillsController.prototype, "delete", null);
exports.SkillsController = SkillsController = __decorate([
    (0, swagger_1.ApiTags)('Technical Skills'),
    (0, common_1.Controller)('skills'),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    __metadata("design:paramtypes", [skills_service_1.SkillsService])
], SkillsController);
//# sourceMappingURL=skills.controller.js.map