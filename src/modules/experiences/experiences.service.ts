import {
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PaginatedResult, PaginationQueryDto } from '../../common/dto';
import {
  CreateEducationDto,
  CreateExperienceDto,
  EducationResponseDto,
  ExperienceResponseDto,
  UpdateEducationDto,
  UpdateExperienceDto,
} from './dto';
import { EducationEntity, ExperienceEntity } from './entities/experience.entity';
import {
  EXPERIENCE_REPOSITORY,
  IExperienceRepository,
} from './interfaces/experience-repository.interface';

@Injectable()
export class ExperiencesService {
  constructor(
    @Inject(EXPERIENCE_REPOSITORY)
    private readonly experienceRepository: IExperienceRepository,
  ) {}

  // Work Experiences
  async createExperience(dto: CreateExperienceDto): Promise<ExperienceEntity> {
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

  async findExperienceById(id: string): Promise<ExperienceEntity> {
    const experience = await this.experienceRepository.findExperienceById(id);
    if (!experience) {
      throw new NotFoundException(`Experience with ID "${id}" not found`);
    }
    return experience;
  }

  async findAllExperiences(query: PaginationQueryDto): Promise<PaginatedResult<ExperienceEntity>> {
    return this.experienceRepository.findAllExperiences(query);
  }

  async updateExperience(id: string, dto: UpdateExperienceDto): Promise<ExperienceEntity> {
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

  async deleteExperience(id: string): Promise<void> {
    await this.findExperienceById(id);
    await this.experienceRepository.deleteExperience(id);
  }

  // Education
  async createEducation(dto: CreateEducationDto): Promise<EducationEntity> {
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

  async findEducationById(id: string): Promise<EducationEntity> {
    const education = await this.experienceRepository.findEducationById(id);
    if (!education) {
      throw new NotFoundException(`Education with ID "${id}" not found`);
    }
    return education;
  }

  async findAllEducations(): Promise<EducationEntity[]> {
    return this.experienceRepository.findAllEducations();
  }

  async updateEducation(id: string, dto: UpdateEducationDto): Promise<EducationEntity> {
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

  async deleteEducation(id: string): Promise<void> {
    await this.findEducationById(id);
    await this.experienceRepository.deleteEducation(id);
  }
}
