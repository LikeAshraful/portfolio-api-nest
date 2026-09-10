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
exports.PrismaSkillRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const dto_1 = require("../../../common/dto");
const skill_entity_1 = require("../entities/skill.entity");
const enums_1 = require("../../../database/generated/prisma/enums");
let PrismaSkillRepository = class PrismaSkillRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const skill = await this.prisma.skill.create({
            data: {
                name: data.name,
                category: data.category ?? enums_1.SkillCategory.BACKEND_FRAMEWORKS,
                proficiency: data.proficiency ?? 80,
                yearsOfExperience: data.yearsOfExperience ?? 1.0,
                iconUrl: data.iconUrl,
                isFeatured: data.isFeatured ?? false,
                sortOrder: data.sortOrder ?? 0,
            },
        });
        return new skill_entity_1.SkillEntity(skill);
    }
    async findById(id) {
        const skill = await this.prisma.skill.findUnique({
            where: { id },
        });
        return skill ? new skill_entity_1.SkillEntity(skill) : null;
    }
    async findByName(name) {
        const skill = await this.prisma.skill.findUnique({
            where: { name },
        });
        return skill ? new skill_entity_1.SkillEntity(skill) : null;
    }
    async findAll(query) {
        const where = {};
        if (query.category) {
            where.category = query.category;
        }
        if (query.featured !== undefined) {
            where.isFeatured = query.featured;
        }
        if (query.search) {
            where.name = { contains: query.search, mode: 'insensitive' };
        }
        const orderBy = {
            [query.sortBy || 'sortOrder']: query.sortOrder || 'asc',
        };
        const [total, skills] = await Promise.all([
            this.prisma.skill.count({ where }),
            this.prisma.skill.findMany({
                where,
                skip: query.skip,
                take: query.limit,
                orderBy,
            }),
        ]);
        const entities = skills.map((s) => new skill_entity_1.SkillEntity(s));
        return new dto_1.PaginatedResult(entities, total, query.page, query.limit);
    }
    async findGroupedByCategory() {
        const skills = await this.prisma.skill.findMany({
            orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }, { proficiency: 'desc' }],
        });
        const grouped = {};
        for (const skill of skills) {
            if (!grouped[skill.category]) {
                grouped[skill.category] = [];
            }
            grouped[skill.category].push(new skill_entity_1.SkillEntity(skill));
        }
        return grouped;
    }
    async update(id, data) {
        const skill = await this.prisma.skill.update({
            where: { id },
            data: {
                ...(data.name !== undefined ? { name: data.name } : {}),
                ...(data.category !== undefined ? { category: data.category } : {}),
                ...(data.proficiency !== undefined ? { proficiency: data.proficiency } : {}),
                ...(data.yearsOfExperience !== undefined ? { yearsOfExperience: data.yearsOfExperience } : {}),
                ...(data.iconUrl !== undefined ? { iconUrl: data.iconUrl } : {}),
                ...(data.isFeatured !== undefined ? { isFeatured: data.isFeatured } : {}),
                ...(data.sortOrder !== undefined ? { sortOrder: data.sortOrder } : {}),
            },
        });
        return new skill_entity_1.SkillEntity(skill);
    }
    async delete(id) {
        await this.prisma.skill.delete({
            where: { id },
        });
        return true;
    }
};
exports.PrismaSkillRepository = PrismaSkillRepository;
exports.PrismaSkillRepository = PrismaSkillRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaSkillRepository);
//# sourceMappingURL=prisma-skill.repository.js.map