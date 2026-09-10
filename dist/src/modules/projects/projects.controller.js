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
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("../../common");
const guards_1 = require("../../common/guards");
const enums_1 = require("../../database/generated/prisma/enums");
const dto_1 = require("./dto");
const projects_service_1 = require("./projects.service");
let ProjectsController = class ProjectsController {
    projectsService;
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    async findAll(query) {
        const result = await this.projectsService.findAll(query);
        return {
            items: result.items.map((p) => dto_1.ProjectResponseDto.fromEntity(p)),
            meta: result.meta,
        };
    }
    async findFeatured() {
        const projects = await this.projectsService.findFeatured();
        return projects.map((p) => dto_1.ProjectResponseDto.fromEntity(p));
    }
    async findBySlugOrId(slugOrId) {
        const project = await this.projectsService.findBySlugOrId(slugOrId);
        return dto_1.ProjectResponseDto.fromEntity(project);
    }
    async like(id) {
        return this.projectsService.like(id);
    }
    async create(dto) {
        const project = await this.projectsService.create(dto);
        return dto_1.ProjectResponseDto.fromEntity(project);
    }
    async update(id, dto) {
        const project = await this.projectsService.update(id, dto);
        return dto_1.ProjectResponseDto.fromEntity(project);
    }
    async delete(id) {
        await this.projectsService.delete(id);
    }
};
exports.ProjectsController = ProjectsController;
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all published projects with filters and pagination' }),
    (0, common_2.ApiPaginatedResponse)(dto_1.ProjectResponseDto),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ProjectQueryDto]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "findAll", null);
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Get)('featured'),
    (0, swagger_1.ApiOperation)({ summary: 'Get curated featured projects for portfolio showcase' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'List of featured projects',
        type: [dto_1.ProjectResponseDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "findFeatured", null);
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Get)(':slugOrId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get project details by slug or UUID (increments view count)' }),
    (0, swagger_1.ApiParam)({ name: 'slugOrId', description: 'Project slug (e.g. distributed-event-engine) or UUID' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Project details',
        type: dto_1.ProjectResponseDto,
    }),
    __param(0, (0, common_1.Param)('slugOrId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "findBySlugOrId", null);
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Post)(':id/like'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Like/upvote a project' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Updated like count',
        schema: { properties: { likesCount: { type: 'number', example: 42 } } },
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "like", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create new project (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Project created successfully',
        type: dto_1.ProjectResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update project (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Project updated successfully',
        type: dto_1.ProjectResponseDto,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete project (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NO_CONTENT, description: 'Project deleted successfully' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "delete", null);
exports.ProjectsController = ProjectsController = __decorate([
    (0, swagger_1.ApiTags)('Projects'),
    (0, common_1.Controller)('projects'),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
//# sourceMappingURL=projects.controller.js.map