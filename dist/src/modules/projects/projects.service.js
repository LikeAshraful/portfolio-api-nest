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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const project_repository_interface_1 = require("./interfaces/project-repository.interface");
let ProjectsService = class ProjectsService {
    projectRepository;
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    generateSlug(text) {
        return text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
    async create(dto) {
        const slug = dto.slug ? this.generateSlug(dto.slug) : this.generateSlug(dto.title);
        const existing = await this.projectRepository.findBySlug(slug);
        if (existing) {
            throw new common_1.ConflictException(`Project with slug "${slug}" already exists`);
        }
        return this.projectRepository.create({
            title: dto.title,
            slug,
            summary: dto.summary,
            description: dto.description,
            thumbnailUrl: dto.thumbnailUrl,
            bannerUrl: dto.bannerUrl,
            liveDemoUrl: dto.liveDemoUrl,
            repoUrl: dto.repoUrl,
            featured: dto.featured,
            status: dto.status,
            category: dto.category,
            sortOrder: dto.sortOrder,
            startedAt: dto.startedAt ? new Date(dto.startedAt) : undefined,
            completedAt: dto.completedAt ? new Date(dto.completedAt) : undefined,
            skills: dto.skills?.map((s) => ({
                skillId: s.skillId,
                isPrimary: s.isPrimary,
            })),
        });
    }
    async findById(id) {
        const project = await this.projectRepository.findById(id);
        if (!project) {
            throw new common_1.NotFoundException(`Project with ID "${id}" not found`);
        }
        return project;
    }
    async findBySlug(slug) {
        const project = await this.projectRepository.findBySlug(slug);
        if (!project) {
            throw new common_1.NotFoundException(`Project with slug "${slug}" not found`);
        }
        return project;
    }
    async findBySlugOrId(identifier) {
        const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(identifier);
        const project = isUuid
            ? await this.projectRepository.findById(identifier)
            : await this.projectRepository.findBySlug(identifier);
        if (!project) {
            throw new common_1.NotFoundException(`Project "${identifier}" not found`);
        }
        this.projectRepository.incrementViews(project.id).catch(() => { });
        return project;
    }
    async findAll(query) {
        return this.projectRepository.findAll(query);
    }
    async findFeatured() {
        return this.projectRepository.findFeatured();
    }
    async update(id, dto) {
        await this.findById(id);
        let slug = undefined;
        if (dto.slug || dto.title) {
            slug = dto.slug ? this.generateSlug(dto.slug) : dto.title ? this.generateSlug(dto.title) : undefined;
            if (slug) {
                const existing = await this.projectRepository.findBySlug(slug);
                if (existing && existing.id !== id) {
                    throw new common_1.ConflictException(`Project with slug "${slug}" already exists`);
                }
            }
        }
        return this.projectRepository.update(id, {
            title: dto.title,
            slug,
            summary: dto.summary,
            description: dto.description,
            thumbnailUrl: dto.thumbnailUrl,
            bannerUrl: dto.bannerUrl,
            liveDemoUrl: dto.liveDemoUrl,
            repoUrl: dto.repoUrl,
            featured: dto.featured,
            status: dto.status,
            category: dto.category,
            sortOrder: dto.sortOrder,
            startedAt: dto.startedAt ? new Date(dto.startedAt) : undefined,
            completedAt: dto.completedAt ? new Date(dto.completedAt) : undefined,
            skills: dto.skills?.map((s) => ({
                skillId: s.skillId,
                isPrimary: s.isPrimary,
            })),
        });
    }
    async delete(id) {
        await this.findById(id);
        await this.projectRepository.delete(id);
    }
    async like(id) {
        await this.findById(id);
        const likesCount = await this.projectRepository.incrementLikes(id);
        return { likesCount };
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(project_repository_interface_1.PROJECT_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map