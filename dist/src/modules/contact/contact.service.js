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
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const contact_repository_interface_1 = require("./interfaces/contact-repository.interface");
let ContactService = class ContactService {
    contactRepository;
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async create(dto, ipAddress, userAgent) {
        return this.contactRepository.create({
            name: dto.name,
            email: dto.email,
            subject: dto.subject,
            message: dto.message,
            ipAddress,
            userAgent,
        });
    }
    async findById(id) {
        const contact = await this.contactRepository.findById(id);
        if (!contact) {
            throw new common_1.NotFoundException(`Contact message with ID "${id}" not found`);
        }
        return contact;
    }
    async findAll(query) {
        return this.contactRepository.findAll(query);
    }
    async updateStatus(id, dto) {
        await this.findById(id);
        return this.contactRepository.updateStatus(id, dto.status, dto.notes);
    }
    async delete(id) {
        await this.findById(id);
        await this.contactRepository.delete(id);
    }
    async getUnreadCount() {
        const unreadCount = await this.contactRepository.getUnreadCount();
        return { unreadCount };
    }
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(contact_repository_interface_1.CONTACT_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], ContactService);
//# sourceMappingURL=contact.service.js.map