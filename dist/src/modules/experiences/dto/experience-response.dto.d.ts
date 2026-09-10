import { EmploymentType } from '../../../database/generated/prisma/enums';
import { ExperienceEntity } from '../entities/experience.entity';
export declare class ExperienceResponseDto {
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
    static fromEntity(entity: ExperienceEntity): ExperienceResponseDto;
}
