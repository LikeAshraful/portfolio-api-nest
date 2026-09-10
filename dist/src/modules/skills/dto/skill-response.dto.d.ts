import { SkillCategory } from '../../../database/generated/prisma/enums';
import { SkillEntity } from '../entities/skill.entity';
export declare class SkillResponseDto {
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
    static fromEntity(entity: SkillEntity): SkillResponseDto;
}
