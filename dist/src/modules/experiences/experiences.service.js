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
exports.ExperiencesService = void 0;
const common_1 = require("@nestjs/common");
const experience_repository_interface_1 = require("./interfaces/experience-repository.interface");
let ExperiencesService = class ExperiencesService {
    experienceRepository;
    constructor(experienceRepository) {
        this.experienceRepository = experienceRepository;
    }
    async createExperience(dto) {
        return this.experienceRepository.createExperience({
            company: dto.company,
            position: dto.position,
            location: dto.location,
            employmentType: dto.employmentType,
            startDate: new Date(dto.startDate),
            endDate: dto.endDate ? new Date(dto.endDate) : undefined,
            isCurrent: dto.isCurrent,
            description: dto.description,
            highlights: dto.highlights,
            companyUrl: dto.companyUrl,
            companyLogoUrl: dto.companyLogoUrl,
            technologies: dto.technologies,
            sortOrder: dto.sortOrder,
        });
    }
    async findExperienceById(id) {
        const experience = await this.experienceRepository.findExperienceById(id);
        if (!experience) {
            throw new common_1.NotFoundException(`Experience with ID "${id}" not found`);
        }
        return experience;
    }
    async findAllExperiences(query) {
        return this.experienceRepository.findAllExperiences(query);
    }
    async updateExperience(id, dto) {
        await this.findExperienceById(id);
        return this.experienceRepository.updateExperience(id, {
            company: dto.company,
            position: dto.position,
            location: dto.location,
            employmentType: dto.employmentType,
            startDate: dto.startDate ? new Date(dto.startDate) : undefined,
            endDate: dto.endDate !== undefined ? (dto.endDate ? new Date(dto.endDate) : null) : undefined,
            isCurrent: dto.isCurrent,
            description: dto.description,
            highlights: dto.highlights,
            companyUrl: dto.companyUrl,
            companyLogoUrl: dto.companyLogoUrl,
            technologies: dto.technologies,
            sortOrder: dto.sortOrder,
        });
    }
    async deleteExperience(id) {
        await this.findExperienceById(id);
        await this.experienceRepository.deleteExperience(id);
    }
    async createEducation(dto) {
        return this.experienceRepository.createEducation({
            institution: dto.institution,
            degree: dto.degree,
            fieldOfStudy: dto.fieldOfStudy,
            startDate: new Date(dto.startDate),
            endDate: dto.endDate ? new Date(dto.endDate) : undefined,
            isCurrent: dto.isCurrent,
            grade: dto.grade,
            description: dto.description,
            credentialUrl: dto.credentialUrl,
            sortOrder: dto.sortOrder,
        });
    }
    async findEducationById(id) {
        const education = await this.experienceRepository.findEducationById(id);
        if (!education) {
            throw new common_1.NotFoundException(`Education with ID "${id}" not found`);
        }
        return education;
    }
    async findAllEducations() {
        return this.experienceRepository.findAllEducations();
    }
    async updateEducation(id, dto) {
        await this.findEducationById(id);
        return this.experienceRepository.updateEducation(id, {
            institution: dto.institution,
            degree: dto.degree,
            fieldOfStudy: dto.fieldOfStudy,
            startDate: dto.startDate ? new Date(dto.startDate) : undefined,
            endDate: dto.endDate !== undefined ? (dto.endDate ? new Date(dto.endDate) : null) : undefined,
            isCurrent: dto.isCurrent,
            grade: dto.grade,
            description: dto.description,
            credentialUrl: dto.credentialUrl,
            sortOrder: dto.sortOrder,
        });
    }
    async deleteEducation(id) {
        await this.findEducationById(id);
        await this.experienceRepository.deleteEducation(id);
    }
};
exports.ExperiencesService = ExperiencesService;
exports.ExperiencesService = ExperiencesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(experience_repository_interface_1.EXPERIENCE_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], ExperiencesService);
//# sourceMappingURL=experiences.service.js.map