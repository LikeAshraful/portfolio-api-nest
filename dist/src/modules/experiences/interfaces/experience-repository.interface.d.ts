import { PaginatedResult, PaginationQueryDto } from '../../../common/dto';
import { EmploymentType } from '../../../database/generated/prisma/enums';
import { EducationEntity, ExperienceEntity } from '../entities/experience.entity';
export declare const EXPERIENCE_REPOSITORY: unique symbol;
export interface CreateExperienceData {
    company: string;
    position: string;
    location?: string;
    employmentType?: EmploymentType;
    startDate: Date;
    endDate?: Date;
    isCurrent?: boolean;
    description: string;
    highlights?: string[];
    companyUrl?: string;
    companyLogoUrl?: string;
    technologies?: string[];
    sortOrder?: number;
}
export interface UpdateExperienceData {
    company?: string;
    position?: string;
    location?: string | null;
    employmentType?: EmploymentType;
    startDate?: Date;
    endDate?: Date | null;
    isCurrent?: boolean;
    description?: string;
    highlights?: string[];
    companyUrl?: string | null;
    companyLogoUrl?: string | null;
    technologies?: string[];
    sortOrder?: number;
}
export interface CreateEducationData {
    institution: string;
    degree: string;
    fieldOfStudy?: string;
    startDate: Date;
    endDate?: Date;
    isCurrent?: boolean;
    grade?: string;
    description?: string;
    credentialUrl?: string;
    sortOrder?: number;
}
export interface UpdateEducationData {
    institution?: string;
    degree?: string;
    fieldOfStudy?: string | null;
    startDate?: Date;
    endDate?: Date | null;
    isCurrent?: boolean;
    grade?: string | null;
    description?: string | null;
    credentialUrl?: string | null;
    sortOrder?: number;
}
export interface IExperienceRepository {
    createExperience(data: CreateExperienceData): Promise<ExperienceEntity>;
    findExperienceById(id: string): Promise<ExperienceEntity | null>;
    findAllExperiences(query: PaginationQueryDto): Promise<PaginatedResult<ExperienceEntity>>;
    updateExperience(id: string, data: UpdateExperienceData): Promise<ExperienceEntity>;
    deleteExperience(id: string): Promise<boolean>;
    createEducation(data: CreateEducationData): Promise<EducationEntity>;
    findEducationById(id: string): Promise<EducationEntity | null>;
    findAllEducations(): Promise<EducationEntity[]>;
    updateEducation(id: string, data: UpdateEducationData): Promise<EducationEntity>;
    deleteEducation(id: string): Promise<boolean>;
}
