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
exports.PrismaUserRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const dto_1 = require("../../../common/dto");
const user_entity_1 = require("../entities/user.entity");
const enums_1 = require("../../../database/generated/prisma/enums");
let PrismaUserRepository = class PrismaUserRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const user = await this.prisma.user.create({
            data: {
                email: data.email,
                passwordHash: data.passwordHash,
                name: data.name,
                title: data.title,
                bio: data.bio,
                avatarUrl: data.avatarUrl,
                location: data.location,
                githubUrl: data.githubUrl,
                linkedinUrl: data.linkedinUrl,
                twitterUrl: data.twitterUrl,
                websiteUrl: data.websiteUrl,
                resumeUrl: data.resumeUrl,
                role: data.role ? data.role : enums_1.Role.USER,
            },
        });
        return new user_entity_1.UserEntity(user);
    }
    async findById(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        return user ? new user_entity_1.UserEntity(user) : null;
    }
    async findByEmail(email) {
        const user = await this.prisma.user.findUnique({
            where: { email: email.toLowerCase().trim() },
        });
        return user ? new user_entity_1.UserEntity(user) : null;
    }
    async findAll(query) {
        const where = {};
        if (query.search) {
            where.OR = [
                { name: { contains: query.search, mode: 'insensitive' } },
                { email: { contains: query.search, mode: 'insensitive' } },
                { title: { contains: query.search, mode: 'insensitive' } },
            ];
        }
        const orderBy = {
            [query.sortBy || 'createdAt']: query.sortOrder || 'desc',
        };
        const [total, users] = await Promise.all([
            this.prisma.user.count({ where }),
            this.prisma.user.findMany({
                where,
                skip: query.skip,
                take: query.limit,
                orderBy,
            }),
        ]);
        const entities = users.map((u) => new user_entity_1.UserEntity(u));
        return new dto_1.PaginatedResult(entities, total, query.page, query.limit);
    }
    async update(id, data) {
        const user = await this.prisma.user.update({
            where: { id },
            data: {
                ...(data.email ? { email: data.email.toLowerCase().trim() } : {}),
                ...(data.passwordHash ? { passwordHash: data.passwordHash } : {}),
                ...(data.name ? { name: data.name } : {}),
                ...(data.title !== undefined ? { title: data.title } : {}),
                ...(data.bio !== undefined ? { bio: data.bio } : {}),
                ...(data.avatarUrl !== undefined ? { avatarUrl: data.avatarUrl } : {}),
                ...(data.location !== undefined ? { location: data.location } : {}),
                ...(data.githubUrl !== undefined ? { githubUrl: data.githubUrl } : {}),
                ...(data.linkedinUrl !== undefined
                    ? { linkedinUrl: data.linkedinUrl }
                    : {}),
                ...(data.twitterUrl !== undefined
                    ? { twitterUrl: data.twitterUrl }
                    : {}),
                ...(data.websiteUrl !== undefined
                    ? { websiteUrl: data.websiteUrl }
                    : {}),
                ...(data.resumeUrl !== undefined ? { resumeUrl: data.resumeUrl } : {}),
                ...(data.role ? { role: data.role } : {}),
                ...(data.isActive !== undefined ? { isActive: data.isActive } : {}),
            },
        });
        return new user_entity_1.UserEntity(user);
    }
    async delete(id) {
        await this.prisma.user.delete({
            where: { id },
        });
        return true;
    }
    async findAdminProfile() {
        const user = await this.prisma.user.findFirst({
            where: { role: enums_1.Role.ADMIN, isActive: true },
            orderBy: { createdAt: 'asc' },
        });
        return user ? new user_entity_1.UserEntity(user) : null;
    }
};
exports.PrismaUserRepository = PrismaUserRepository;
exports.PrismaUserRepository = PrismaUserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaUserRepository);
//# sourceMappingURL=prisma-user.repository.js.map