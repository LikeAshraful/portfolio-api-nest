import { SkillCategory } from '../../../database/generated/prisma/enums';
export declare class CreateSkillDto {
    name: string;
    category?: SkillCategory;
    proficiency?: number;
    yearsOfExperience?: number;
    iconUrl?: string;
    isFeatured?: boolean;
    sortOrder?: number;
}
