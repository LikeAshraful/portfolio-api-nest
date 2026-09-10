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
exports.PrismaProjectRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const dto_1 = require("../../../common/dto");
const project_entity_1 = require("../entities/project.entity");
const enums_1 = require("../../../database/generated/prisma/enums");
let PrismaProjectRepository = class PrismaProjectRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    mapToEntity(project) {
        const technologies = project.technologies.map((t) => ({
            skillId: t.skillId,
            name: t.skill.name,
            iconUrl: t.skill.iconUrl,
            isPrimary: t.isPrimary,
        }));
        return new project_entity_1.ProjectEntity({
            ...project,
            technologies,
        });
    }
    async create(data) {
        const project = await this.prisma.project.create({
            data: {
                title: data.title,
                slug: data.slug,
                summary: data.summary,
                description: data.description,
                thumbnailUrl: data.thumbnailUrl,
                bannerUrl: data.bannerUrl,
                liveDemoUrl: data.liveDemoUrl,
                repoUrl: data.repoUrl,
                featured: data.featured ?? false,
                status: data.status ?? enums_1.ProjectStatus.PUBLISHED,
                category: data.category ?? enums_1.ProjectCategory.FULLSTACK,
                sortOrder: data.sortOrder ?? 0,
                startedAt: data.startedAt,
                completedAt: data.completedAt,
                technologies: data.skills?.length
                    ? {
                        create: data.skills.map((s) => ({
                            skillId: s.skillId,
                            isPrimary: s.isPrimary ?? false,
                        })),
                    }
                    : undefined,
            },
            include: {
                technologies: {
                    include: {
                        skill: true,
                    },
                },
            },
        });
        return this.mapToEntity(project);
    }
    async findById(id) {
        const project = await this.prisma.project.findUnique({
            where: { id },
            include: {
                technologies: {
                    include: {
                        skill: true,
                    },
                },
            },
        });
        return project ? this.mapToEntity(project) : null;
    }
    async findBySlug(slug) {
        const project = await this.prisma.project.findUnique({
            where: { slug },
            include: {
                technologies: {
                    include: {
                        skill: true,
                    },
                },
            },
        });
        return project ? this.mapToEntity(project) : null;
    }
    async findAll(query) {
        const where = {};
        if (query.category) {
            where.category = query.category;
        }
        if (query.status) {
            where.status = query.status;
        }
        if (query.featured !== undefined) {
            where.featured = query.featured;
        }
        if (query.skill) {
            where.technologies = {
                some: {
                    skill: {
                        name: { contains: query.skill, mode: 'insensitive' },
                    },
                },
            };
        }
        if (query.search) {
            where.OR = [
                { title: { contains: query.search, mode: 'insensitive' } },
                { summary: { contains: query.search, mode: 'insensitive' } },
                { description: { contains: query.search, mode: 'insensitive' } },
            ];
        }
        const orderBy = {
            [query.sortBy || 'sortOrder']: query.sortOrder || 'asc',
        };
        const [total, projects] = await Promise.all([
            this.prisma.project.count({ where }),
            this.prisma.project.findMany({
                where,
                skip: query.skip,
                take: query.limit,
                orderBy,
                include: {
                    technologies: {
                        include: {
                            skill: true,
                        },
                    },
                },
            }),
        ]);
        const entities = projects.map((p) => this.mapToEntity(p));
        return new dto_1.PaginatedResult(entities, total, query.page, query.limit);
    }
    async update(id, data) {
        const { skills, ...directFields } = data;
        const project = await this.prisma.$transaction(async (tx) => {
            if (skills !== undefined) {
                await tx.projectSkill.deleteMany({
                    where: { projectId: id },
                });
                if (skills.length > 0) {
                    await tx.projectSkill.createMany({
                        data: skills.map((s) => ({
                            projectId: id,
                            skillId: s.skillId,
                            isPrimary: s.isPrimary ?? false,
                        })),
                    });
                }
            }
            return tx.project.update({
                where: { id },
                data: {
                    ...(directFields.title !== undefined ? { title: directFields.title } : {}),
                    ...(directFields.slug !== undefined ? { slug: directFields.slug } : {}),
                    ...(directFields.summary !== undefined ? { summary: directFields.summary } : {}),
                    ...(directFields.description !== undefined ? { description: directFields.description } : {}),
                    ...(directFields.thumbnailUrl !== undefined ? { thumbnailUrl: directFields.thumbnailUrl } : {}),
                    ...(directFields.bannerUrl !== undefined ? { bannerUrl: directFields.bannerUrl } : {}),
                    ...(directFields.liveDemoUrl !== undefined ? { liveDemoUrl: directFields.liveDemoUrl } : {}),
                    ...(directFields.repoUrl !== undefined ? { repoUrl: directFields.repoUrl } : {}),
                    ...(directFields.featured !== undefined ? { featured: directFields.featured } : {}),
                    ...(directFields.status !== undefined ? { status: directFields.status } : {}),
                    ...(directFields.category !== undefined ? { category: directFields.category } : {}),
                    ...(directFields.sortOrder !== undefined ? { sortOrder: directFields.sortOrder } : {}),
                    ...(directFields.startedAt !== undefined ? { startedAt: directFields.startedAt } : {}),
                    ...(directFields.completedAt !== undefined ? { completedAt: directFields.completedAt } : {}),
                },
                include: {
                    technologies: {
                        include: {
                            skill: true,
                        },
                    },
                },
            });
        });
        return this.mapToEntity(project);
    }
    async delete(id) {
        await this.prisma.project.delete({
            where: { id },
        });
        return true;
    }
    async findFeatured() {
        const projects = await this.prisma.project.findMany({
            where: { featured: true, status: enums_1.ProjectStatus.PUBLISHED },
            orderBy: { sortOrder: 'asc' },
            include: {
                technologies: {
                    include: {
                        skill: true,
                    },
                },
            },
        });
        return projects.map((p) => this.mapToEntity(p));
    }
    async incrementViews(id) {
        await this.prisma.project.update({
            where: { id },
            data: { viewsCount: { increment: 1 } },
        });
    }
    async incrementLikes(id) {
        const updated = await this.prisma.project.update({
            where: { id },
            data: { likesCount: { increment: 1 } },
            select: { likesCount: true },
        });
        return updated.likesCount;
    }
};
exports.PrismaProjectRepository = PrismaProjectRepository;
exports.PrismaProjectRepository = PrismaProjectRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaProjectRepository);
//# sourceMappingURL=prisma-project.repository.js.map