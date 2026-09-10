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
exports.ContactController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("../../common");
const guards_1 = require("../../common/guards");
const enums_1 = require("../../database/generated/prisma/enums");
const dto_1 = require("./dto");
const contact_service_1 = require("./contact.service");
let ContactController = class ContactController {
    contactService;
    constructor(contactService) {
        this.contactService = contactService;
    }
    async create(dto, ip, req) {
        const userAgent = req.get('user-agent');
        const contact = await this.contactService.create(dto, ip, userAgent);
        return dto_1.ContactResponseDto.fromEntity(contact);
    }
    async getUnreadCount() {
        return this.contactService.getUnreadCount();
    }
    async findAll(query) {
        const result = await this.contactService.findAll(query);
        return {
            items: result.items.map((c) => dto_1.ContactResponseDto.fromEntity(c)),
            meta: result.meta,
        };
    }
    async findById(id) {
        const contact = await this.contactService.findById(id);
        return dto_1.ContactResponseDto.fromEntity(contact);
    }
    async updateStatus(id, dto) {
        const contact = await this.contactService.updateStatus(id, dto);
        return dto_1.ContactResponseDto.fromEntity(contact);
    }
    async delete(id) {
        await this.contactService.delete(id);
    }
};
exports.ContactController = ContactController;
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Submit a new contact inquiry or message' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Message sent successfully',
        type: dto_1.ContactResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Ip)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateContactDto, String, Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Get)('unread-count'),
    (0, swagger_1.ApiOperation)({ summary: 'Get total count of unread inquiries (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Count of unread messages',
        schema: { properties: { unreadCount: { type: 'number', example: 3 } } },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "getUnreadCount", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all inquiries with filters and pagination (Admin only)' }),
    (0, common_2.ApiPaginatedResponse)(dto_1.ContactResponseDto),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ContactQueryDto]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get inquiry details by ID (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Inquiry details',
        type: dto_1.ContactResponseDto,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Patch)(':id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update inquiry status and notes (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Updated inquiry',
        type: dto_1.ContactResponseDto,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateContactStatusDto]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "updateStatus", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete inquiry by ID (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NO_CONTENT, description: 'Inquiry deleted successfully' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "delete", null);
exports.ContactController = ContactController = __decorate([
    (0, swagger_1.ApiTags)('Contact & Inquiries'),
    (0, common_1.Controller)('contact'),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactController);
//# sourceMappingURL=contact.controller.js.map