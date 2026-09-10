import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { PaginatedResult, PaginationQueryDto } from '../../../common/dto';
import { EducationEntity, ExperienceEntity } from '../entities/experience.entity';
import {
  CreateEducationData,
  CreateExperienceData,
  IExperienceRepository,
  UpdateEducationData,
  UpdateExperienceData,
} from '../interfaces/experience-repository.interface';
import { Prisma } from '../../../database/generated/prisma/client';
import { EmploymentType } from '../../../database/generated/prisma/enums';

@Injectable()
export class PrismaExperienceRepository implements IExperienceRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createExperience(data: CreateExperienceData): Promise<ExperienceEntity> {
    const experience = await this.prisma.experience.create({
      data: {
        company: data.company,
        position: data.position,
        location: data.location,
        employmentType: data.employmentType ?? EmploymentType.FULL_TIME,
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

    return new ExperienceEntity(experience);
  }

  async findExperienceById(id: string): Promise<ExperienceEntity | null> {
    const experience = await this.prisma.experience.findUnique({
      where: { id },
    });

    return experience ? new ExperienceEntity(experience) : null;
  }

  async findAllExperiences(query: PaginationQueryDto): Promise<PaginatedResult<ExperienceEntity>> {
    const where: Prisma.ExperienceWhereInput = {};

    if (query.search) {
      where.OR = [
        { company: { contains: query.search, mode: 'insensitive' } },
        { position: { contains: query.search, mode: 'insensitive' } },
        { description: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const orderBy: Prisma.ExperienceOrderByWithRelationInput = {
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

    const entities = experiences.map((e) => new ExperienceEntity(e));
    return new PaginatedResult(entities, total, query.page, query.limit);
  }

  async updateExperience(id: string, data: UpdateExperienceData): Promise<ExperienceEntity> {
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

    return new ExperienceEntity(experience);
  }

  async deleteExperience(id: string): Promise<boolean> {
    await this.prisma.experience.delete({
      where: { id },
    });
    return true;
  }

  async createEducation(data: CreateEducationData): Promise<EducationEntity> {
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

    return new EducationEntity(education);
  }

  async findEducationById(id: string): Promise<EducationEntity | null> {
    const education = await this.prisma.education.findUnique({
      where: { id },
    });

    return education ? new EducationEntity(education) : null;
  }

  async findAllEducations(): Promise<EducationEntity[]> {
    const educations = await this.prisma.education.findMany({
      orderBy: [{ sortOrder: 'asc' }, { startDate: 'desc' }],
    });

    return educations.map((e) => new EducationEntity(e));
  }

  async updateEducation(id: string, data: UpdateEducationData): Promise<EducationEntity> {
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

    return new EducationEntity(education);
  }

  async deleteEducation(id: string): Promise<boolean> {
    await this.prisma.education.delete({
      where: { id },
    });
    return true;
  }
}
