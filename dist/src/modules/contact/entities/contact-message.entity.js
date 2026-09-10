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
exports.ContactMessageEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../../database/generated/prisma/enums");
class ContactMessageEntity {
    id;
    name;
    email;
    subject;
    message;
    ipAddress;
    userAgent;
    status;
    notes;
    createdAt;
    updatedAt;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.ContactMessageEntity = ContactMessageEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], ContactMessageEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Sarah Connor' }),
    __metadata("design:type", String)
], ContactMessageEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'sarah@example.com' }),
    __metadata("design:type", String)
], ContactMessageEntity.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Project Collaboration Opportunity' }),
    __metadata("design:type", String)
], ContactMessageEntity.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Hi Alex, we would love to discuss a distributed backend contract.' }),
    __metadata("design:type", String)
], ContactMessageEntity.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '192.168.1.1' }),
    __metadata("design:type", Object)
], ContactMessageEntity.prototype, "ipAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Mozilla/5.0...' }),
    __metadata("design:type", Object)
], ContactMessageEntity.prototype, "userAgent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.ContactStatus, example: enums_1.ContactStatus.UNREAD }),
    __metadata("design:type", String)
], ContactMessageEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Scheduled intro call for next Tuesday.' }),
    __metadata("design:type", Object)
], ContactMessageEntity.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-09-09T10:00:00.000Z' }),
    __metadata("design:type", Date)
], ContactMessageEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-09-09T10:00:00.000Z' }),
    __metadata("design:type", Date)
], ContactMessageEntity.prototype, "updatedAt", void 0);
//# sourceMappingURL=contact-message.entity.js.map