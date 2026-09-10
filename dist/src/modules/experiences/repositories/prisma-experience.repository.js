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
exports.PrismaExperienceRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const dto_1 = require("../../../common/dto");
const experience_entity_1 = require("../entities/experience.entity");
const enums_1 = require("../../../database/generated/prisma/enums");
let PrismaExperienceRepository = class PrismaExperienceRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createExperience(data) {
        const experience = await this.prisma.experience.create({
            data: {
                company: data.company,
                position: data.position,
                location: data.location,
                employmentType: data.employmentType ?? enums_1.EmploymentType.FULL_TIME,
                startDate: data.startDate,
                endDate: data.endDate,
                isCurrent: data.isCurrent ?? false,
                description: data.description,
                highlights: data.highlights ?? [],
                companyUrl: data.companyUrl,
                companyLogoUrl: data.companyLogoUrl,
                technologies: data.technologies ?? [],
                sortOrder: data.sortOrder ?? 0,
            },
        });
        return new experience_entity_1.ExperienceEntity(experience);
    }
    async findExperienceById(id) {
        const experience = await this.prisma.experience.findUnique({
            where: { id },
        });
        return experience ? new experience_entity_1.ExperienceEntity(experience) : null;
    }
    async findAllExperiences(query) {
        const where = {};
        if (query.search) {
            where.OR = [
                { company: { contains: query.search, mode: 'insensitive' } },
                { position: { contains: query.search, mode: 'insensitive' } },
                { description: { contains: query.search, mode: 'insensitive' } },
            ];
        }
        const orderBy = {
            [query.sortBy || 'startDate']: query.sortOrder || 'desc',
        };
        const [total, experiences] = await Promise.all([
            this.prisma.experience.count({ where }),
            this.prisma.experience.findMany({
                where,
                skip: query.skip,
                take: query.limit,
                orderBy,
            }),
        ]);
        const entities = experiences.map((e) => new experience_entity_1.ExperienceEntity(e));
        return new dto_1.PaginatedResult(entities, total, query.page, query.limit);
    }
    async updateExperience(id, data) {
        const experience = await this.prisma.experience.update({
            where: { id },
            data: {
                ...(data.company !== undefined ? { company: data.company } : {}),
                ...(data.position !== undefined ? { position: data.position } : {}),
                ...(data.location !== undefined ? { location: data.location } : {}),
                ...(data.employmentType !== undefined ? { employmentType: data.employmentType } : {}),
                ...(data.startDate !== undefined ? { startDate: data.startDate } : {}),
                ...(data.endDate !== undefined ? { endDate: data.endDate } : {}),
                ...(data.isCurrent !== undefined ? { isCurrent: data.isCurrent } : {}),
                ...(data.description !== undefined ? { description: data.description } : {}),
                ...(data.highlights !== undefined ? { highlights: data.highlights } : {}),
                ...(data.companyUrl !== undefined ? { companyUrl: data.companyUrl } : {}),
                ...(data.companyLogoUrl !== undefined ? { companyLogoUrl: data.companyLogoUrl } : {}),
                ...(data.technologies !== undefined ? { technologies: data.technologies } : {}),
                ...(data.sortOrder !== undefined ? { sortOrder: data.sortOrder } : {}),
            },
        });
        return new experience_entity_1.ExperienceEntity(experience);
    }
    async deleteExperience(id) {
        await this.prisma.experience.delete({
            where: { id },
        });
        return true;
    }
    async createEducation(data) {
        const education = await this.prisma.education.create({
            data: {
                institution: data.institution,
                degree: data.degree,
                fieldOfStudy: data.fieldOfStudy,
                startDate: data.startDate,
                endDate: data.endDate,
                isCurrent: data.isCurrent ?? false,
                grade: data.grade,
                description: data.description,
                credentialUrl: data.credentialUrl,
                sortOrder: data.sortOrder ?? 0,
            },
        });
        return new experience_entity_1.EducationEntity(education);
    }
    async findEducationById(id) {
        const education = await this.prisma.education.findUnique({
            where: { id },
        });
        return education ? new experience_entity_1.EducationEntity(education) : null;
    }
    async findAllEducations() {
        const educations = await this.prisma.education.findMany({
            orderBy: [{ sortOrder: 'asc' }, { startDate: 'desc' }],
        });
        return educations.map((e) => new experience_entity_1.EducationEntity(e));
    }
    async updateEducation(id, data) {
        const education = await this.prisma.education.update({
            where: { id },
            data: {
                ...(data.institution !== undefined ? { institution: data.institution } : {}),
                ...(data.degree !== undefined ? { degree: data.degree } : {}),
                ...(data.fieldOfStudy !== undefined ? { fieldOfStudy: data.fieldOfStudy } : {}),
                ...(data.startDate !== undefined ? { startDate: data.startDate } : {}),
                ...(data.endDate !== undefined ? { endDate: data.endDate } : {}),
                ...(data.isCurrent !== undefined ? { isCurrent: data.isCurrent } : {}),
                ...(data.grade !== undefined ? { grade: data.grade } : {}),
                ...(data.description !== undefined ? { description: data.description } : {}),
                ...(data.credentialUrl !== undefined ? { credentialUrl: data.credentialUrl } : {}),
                ...(data.sortOrder !== undefined ? { sortOrder: data.sortOrder } : {}),
            },
        });
        return new experience_entity_1.EducationEntity(education);
    }
    async deleteEducation(id) {
        await this.prisma.education.delete({
            where: { id },
        });
        return true;
    }
};
exports.PrismaExperienceRepository = PrismaExperienceRepository;
exports.PrismaExperienceRepository = PrismaExperienceRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaExperienceRepository);
//# sourceMappingURL=prisma-experience.repository.js.map