import { EmploymentType } from '../../../database/generated/prisma/enums';
export declare class UpdateExperienceDto {
    company?: string;
    position?: string;
    location?: string;
    employmentType?: EmploymentType;
    startDate?: string;
    endDate?: string;
    isCurrent?: boolean;
    description?: string;
    highlights?: string[];
    companyUrl?: string;
    companyLogoUrl?: string;
    technologies?: string[];
    sortOrder?: number;
}
