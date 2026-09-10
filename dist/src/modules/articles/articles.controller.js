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
exports.ArticlesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("../../common");
const guards_1 = require("../../common/guards");
const enums_1 = require("../../database/generated/prisma/enums");
const dto_1 = require("./dto");
const articles_service_1 = require("./articles.service");
let ArticlesController = class ArticlesController {
    articlesService;
    constructor(articlesService) {
        this.articlesService = articlesService;
    }
    async findAll(query) {
        const result = await this.articlesService.findAll(query);
        return {
            items: result.items.map((a) => dto_1.ArticleResponseDto.fromEntity(a)),
            meta: result.meta,
        };
    }
    async findBySlugOrId(slugOrId) {
        const article = await this.articlesService.findBySlugOrId(slugOrId);
        return dto_1.ArticleResponseDto.fromEntity(article);
    }
    async create(currentUser, dto) {
        const article = await this.articlesService.create(dto, currentUser.id);
        return dto_1.ArticleResponseDto.fromEntity(article);
    }
    async update(id, dto) {
        const article = await this.articlesService.update(id, dto);
        return dto_1.ArticleResponseDto.fromEntity(article);
    }
    async delete(id) {
        await this.articlesService.delete(id);
    }
};
exports.ArticlesController = ArticlesController;
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get published technical articles with pagination' }),
    (0, common_2.ApiPaginatedResponse)(dto_1.ArticleResponseDto),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ArticleQueryDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findAll", null);
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Get)(':slugOrId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get article details by slug or UUID (increments view count)' }),
    (0, swagger_1.ApiParam)({ name: 'slugOrId', description: 'Article slug (e.g. designing-resilient-distributed-systems) or UUID' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Article details',
        type: dto_1.ArticleResponseDto,
    }),
    __param(0, (0, common_1.Param)('slugOrId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findBySlugOrId", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new article (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Article created successfully',
        type: dto_1.ArticleResponseDto,
    }),
    __param(0, (0, common_2.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update article (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Article updated successfully',
        type: dto_1.ArticleResponseDto,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete article (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NO_CONTENT, description: 'Article deleted successfully' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "delete", null);
exports.ArticlesController = ArticlesController = __decorate([
    (0, swagger_1.ApiTags)('Technical Articles'),
    (0, common_1.Controller)('articles'),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesController);
//# sourceMappingURL=articles.controller.js.map