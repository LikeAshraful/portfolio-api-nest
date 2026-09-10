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
exports.PrismaArticleRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const dto_1 = require("../../../common/dto");
const article_entity_1 = require("../entities/article.entity");
let PrismaArticleRepository = class PrismaArticleRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    mapToEntity(article) {
        const author = article.author
            ? {
                id: article.author.id,
                name: article.author.name,
                avatarUrl: article.author.avatarUrl,
            }
            : null;
        return new article_entity_1.ArticleEntity({
            ...article,
            author,
        });
    }
    async create(data) {
        const article = await this.prisma.article.create({
            data: {
                title: data.title,
                slug: data.slug,
                summary: data.summary,
                content: data.content,
                coverImageUrl: data.coverImageUrl,
                tags: data.tags ?? [],
                readingTimeMinutes: data.readingTimeMinutes ?? 5,
                isPublished: data.isPublished ?? false,
                publishedAt: data.publishedAt,
                authorId: data.authorId,
            },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        avatarUrl: true,
                    },
                },
            },
        });
        return this.mapToEntity(article);
    }
    async findById(id) {
        const article = await this.prisma.article.findUnique({
            where: { id },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        avatarUrl: true,
                    },
                },
            },
        });
        return article ? this.mapToEntity(article) : null;
    }
    async findBySlug(slug) {
        const article = await this.prisma.article.findUnique({
            where: { slug },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        avatarUrl: true,
                    },
                },
            },
        });
        return article ? this.mapToEntity(article) : null;
    }
    async findAll(query) {
        const where = {};
        if (query.published !== undefined) {
            where.isPublished = query.published;
        }
        if (query.tag) {
            where.tags = { has: query.tag };
        }
        if (query.search) {
            where.OR = [
                { title: { contains: query.search, mode: 'insensitive' } },
                { summary: { contains: query.search, mode: 'insensitive' } },
                { content: { contains: query.search, mode: 'insensitive' } },
            ];
        }
        const orderBy = {
            [query.sortBy || 'createdAt']: query.sortOrder || 'desc',
        };
        const [total, articles] = await Promise.all([
            this.prisma.article.count({ where }),
            this.prisma.article.findMany({
                where,
                skip: query.skip,
                take: query.limit,
                orderBy,
                include: {
                    author: {
                        select: {
                            id: true,
                            name: true,
                            avatarUrl: true,
                        },
                    },
                },
            }),
        ]);
        const entities = articles.map((a) => this.mapToEntity(a));
        return new dto_1.PaginatedResult(entities, total, query.page, query.limit);
    }
    async update(id, data) {
        const article = await this.prisma.article.update({
            where: { id },
            data: {
                ...(data.title !== undefined ? { title: data.title } : {}),
                ...(data.slug !== undefined ? { slug: data.slug } : {}),
                ...(data.summary !== undefined ? { summary: data.summary } : {}),
                ...(data.content !== undefined ? { content: data.content } : {}),
                ...(data.coverImageUrl !== undefined ? { coverImageUrl: data.coverImageUrl } : {}),
                ...(data.tags !== undefined ? { tags: data.tags } : {}),
                ...(data.readingTimeMinutes !== undefined ? { readingTimeMinutes: data.readingTimeMinutes } : {}),
                ...(data.isPublished !== undefined ? { isPublished: data.isPublished } : {}),
                ...(data.publishedAt !== undefined ? { publishedAt: data.publishedAt } : {}),
            },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        avatarUrl: true,
                    },
                },
            },
        });
        return this.mapToEntity(article);
    }
    async delete(id) {
        await this.prisma.article.delete({
            where: { id },
        });
        return true;
    }
    async incrementViews(id) {
        await this.prisma.article.update({
            where: { id },
            data: { viewsCount: { increment: 1 } },
        });
    }
};
exports.PrismaArticleRepository = PrismaArticleRepository;
exports.PrismaArticleRepository = PrismaArticleRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaArticleRepository);
//# sourceMappingURL=prisma-article.repository.js.map