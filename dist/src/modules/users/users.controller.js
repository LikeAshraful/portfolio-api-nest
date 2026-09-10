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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("../../common");
const guards_1 = require("../../common/guards");
const enums_1 = require("../../database/generated/prisma/enums");
const dto_1 = require("./dto");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getPublicProfile() {
        const user = await this.usersService.getPublicProfile();
        return dto_1.UserResponseDto.fromEntity(user);
    }
    async getMe(currentUser) {
        const user = await this.usersService.findById(currentUser.id);
        return dto_1.UserResponseDto.fromEntity(user);
    }
    async updateMe(currentUser, dto) {
        const { role: _role, ...safeDto } = dto;
        const user = await this.usersService.update(currentUser.id, safeDto);
        return dto_1.UserResponseDto.fromEntity(user);
    }
    async changePassword(currentUser, dto) {
        await this.usersService.changePassword(currentUser.id, dto);
        return { message: 'Password changed successfully' };
    }
    async create(dto) {
        const user = await this.usersService.create(dto);
        return dto_1.UserResponseDto.fromEntity(user);
    }
    async findAll(query) {
        const result = await this.usersService.findAll(query);
        return {
            items: result.items.map((u) => dto_1.UserResponseDto.fromEntity(u)),
            meta: result.meta,
        };
    }
    async findById(id) {
        const user = await this.usersService.findById(id);
        return dto_1.UserResponseDto.fromEntity(user);
    }
    async update(id, dto) {
        const user = await this.usersService.update(id, dto);
        return dto_1.UserResponseDto.fromEntity(user);
    }
    async delete(id) {
        await this.usersService.delete(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Get)('profile/public'),
    (0, swagger_1.ApiOperation)({ summary: 'Get public portfolio owner profile' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Owner profile details for portfolio website',
        type: dto_1.UserResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getPublicProfile", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('me'),
    (0, swagger_1.ApiOperation)({ summary: 'Get current authenticated user profile' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Current user profile',
        type: dto_1.UserResponseDto,
    }),
    __param(0, (0, common_2.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMe", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)('me'),
    (0, swagger_1.ApiOperation)({ summary: 'Update current authenticated user profile' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Updated profile',
        type: dto_1.UserResponseDto,
    }),
    __param(0, (0, common_2.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateMe", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('me/change-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Change current user password' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Password changed successfully',
    }),
    __param(0, (0, common_2.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changePassword", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create user (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'User created successfully',
        type: dto_1.UserResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List all users paginated (Admin only)' }),
    (0, common_2.ApiPaginatedResponse)(dto_1.UserResponseDto),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UserQueryDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user by ID' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'User details',
        type: dto_1.UserResponseDto,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update user by ID (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Updated user',
        type: dto_1.UserResponseDto,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete user by ID (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'User deleted successfully',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users & Profile'),
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map