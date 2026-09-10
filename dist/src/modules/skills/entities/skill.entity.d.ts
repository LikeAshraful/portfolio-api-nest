import { SkillCategory } from '../../../database/generated/prisma/enums';
export declare class SkillEntity {
    id: string;
    name: string;
    category: SkillCategory;
    proficiency: number;
    yearsOfExperience: number;
    iconUrl?: string | null;
    isFeatured: boolean;
    sortOrder: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<SkillEntity>);
}
