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
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const article_repository_interface_1 = require("./interfaces/article-repository.interface");
let ArticlesService = class ArticlesService {
    articleRepository;
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    generateSlug(text) {
        return text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
    calculateReadingTime(content) {
        const wordsPerMinute = 200;
        const words = content.trim().split(/\s+/).length;
        return Math.max(1, Math.ceil(words / wordsPerMinute));
    }
    async create(dto, authorId) {
        const slug = dto.slug ? this.generateSlug(dto.slug) : this.generateSlug(dto.title);
        const existing = await this.articleRepository.findBySlug(slug);
        if (existing) {
            throw new common_1.ConflictException(`Article with slug "${slug}" already exists`);
        }
        const readingTime = dto.readingTimeMinutes ?? this.calculateReadingTime(dto.content);
        const isPublished = dto.isPublished ?? false;
        const publishedAt = isPublished
            ? dto.publishedAt
                ? new Date(dto.publishedAt)
                : new Date()
            : undefined;
        return this.articleRepository.create({
            title: dto.title,
            slug,
            summary: dto.summary,
            content: dto.content,
            coverImageUrl: dto.coverImageUrl,
            tags: dto.tags,
            readingTimeMinutes: readingTime,
            isPublished,
            publishedAt,
            authorId,
        });
    }
    async findById(id) {
        const article = await this.articleRepository.findById(id);
        if (!article) {
            throw new common_1.NotFoundException(`Article with ID "${id}" not found`);
        }
        return article;
    }
    async findBySlug(slug) {
        const article = await this.articleRepository.findBySlug(slug);
        if (!article) {
            throw new common_1.NotFoundException(`Article with slug "${slug}" not found`);
        }
        return article;
    }
    async findBySlugOrId(identifier) {
        const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(identifier);
        const article = isUuid
            ? await this.articleRepository.findById(identifier)
            : await this.articleRepository.findBySlug(identifier);
        if (!article) {
            throw new common_1.NotFoundException(`Article "${identifier}" not found`);
        }
        this.articleRepository.incrementViews(article.id).catch(() => { });
        return article;
    }
    async findAll(query) {
        return this.articleRepository.findAll(query);
    }
    async update(id, dto) {
        const existingArticle = await this.findById(id);
        let slug = undefined;
        if (dto.slug || dto.title) {
            slug = dto.slug ? this.generateSlug(dto.slug) : dto.title ? this.generateSlug(dto.title) : undefined;
            if (slug) {
                const existing = await this.articleRepository.findBySlug(slug);
                if (existing && existing.id !== id) {
                    throw new common_1.ConflictException(`Article with slug "${slug}" already exists`);
                }
            }
        }
        const readingTime = dto.content ? this.calculateReadingTime(dto.content) : dto.readingTimeMinutes;
        const isPublished = dto.isPublished !== undefined ? dto.isPublished : existingArticle.isPublished;
        let publishedAt = undefined;
        if (dto.publishedAt) {
            publishedAt = new Date(dto.publishedAt);
        }
        else if (dto.isPublished === true && !existingArticle.publishedAt) {
            publishedAt = new Date();
        }
        return this.articleRepository.update(id, {
            title: dto.title,
            slug,
            summary: dto.summary,
            content: dto.content,
            coverImageUrl: dto.coverImageUrl,
            tags: dto.tags,
            readingTimeMinutes: readingTime,
            isPublished: dto.isPublished,
            publishedAt,
        });
    }
    async delete(id) {
        await this.findById(id);
        await this.articleRepository.delete(id);
    }
};
exports.ArticlesService = ArticlesService;
exports.ArticlesService = ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(article_repository_interface_1.ARTICLE_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], ArticlesService);
//# sourceMappingURL=articles.service.js.map