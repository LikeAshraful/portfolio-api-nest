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
exports.PrismaContactRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const dto_1 = require("../../../common/dto");
const contact_message_entity_1 = require("../entities/contact-message.entity");
const enums_1 = require("../../../database/generated/prisma/enums");
let PrismaContactRepository = class PrismaContactRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const contact = await this.prisma.contactMessage.create({
            data: {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message,
                ipAddress: data.ipAddress,
                userAgent: data.userAgent,
                status: enums_1.ContactStatus.UNREAD,
            },
        });
        return new contact_message_entity_1.ContactMessageEntity(contact);
    }
    async findById(id) {
        const contact = await this.prisma.contactMessage.findUnique({
            where: { id },
        });
        return contact ? new contact_message_entity_1.ContactMessageEntity(contact) : null;
    }
    async findAll(query) {
        const where = {};
        if (query.status) {
            where.status = query.status;
        }
        if (query.search) {
            where.OR = [
                { name: { contains: query.search, mode: 'insensitive' } },
                { email: { contains: query.search, mode: 'insensitive' } },
                { subject: { contains: query.search, mode: 'insensitive' } },
                { message: { contains: query.search, mode: 'insensitive' } },
            ];
        }
        const orderBy = {
            [query.sortBy || 'createdAt']: query.sortOrder || 'desc',
        };
        const [total, contacts] = await Promise.all([
            this.prisma.contactMessage.count({ where }),
            this.prisma.contactMessage.findMany({
                where,
                skip: query.skip,
                take: query.limit,
                orderBy,
            }),
        ]);
        const entities = contacts.map((c) => new contact_message_entity_1.ContactMessageEntity(c));
        return new dto_1.PaginatedResult(entities, total, query.page, query.limit);
    }
    async updateStatus(id, status, notes) {
        const contact = await this.prisma.contactMessage.update({
            where: { id },
            data: {
                status,
                ...(notes !== undefined ? { notes } : {}),
            },
        });
        return new contact_message_entity_1.ContactMessageEntity(contact);
    }
    async delete(id) {
        await this.prisma.contactMessage.delete({
            where: { id },
        });
        return true;
    }
    async getUnreadCount() {
        return this.prisma.contactMessage.count({
            where: { status: enums_1.ContactStatus.UNREAD },
        });
    }
};
exports.PrismaContactRepository = PrismaContactRepository;
exports.PrismaContactRepository = PrismaContactRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaContactRepository);
//# sourceMappingURL=prisma-contact.repository.js.map