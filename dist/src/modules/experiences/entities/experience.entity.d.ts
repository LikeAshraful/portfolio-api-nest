import { EmploymentType } from '../../../database/generated/prisma/enums';
export declare class ExperienceEntity {
    id: string;
    company: string;
    position: string;
    location?: string | null;
    employmentType: EmploymentType;
    startDate: Date;
    endDate?: Date | null;
    isCurrent: boolean;
    description: string;
    highlights: string[];
    companyUrl?: string | null;
    companyLogoUrl?: string | null;
    technologies: string[];
    sortOrder: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<ExperienceEntity>);
}
export declare class EducationEntity {
    id: string;
    institution: string;
    degree: string;
    fieldOfStudy?: string | null;
    startDate: Date;
    endDate?: Date | null;
    isCurrent: boolean;
    grade?: string | null;
    description?: string | null;
    credentialUrl?: string | null;
    sortOrder: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<EducationEntity>);
}
