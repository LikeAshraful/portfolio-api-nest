import { ProjectCategory, ProjectStatus } from '../../../database/generated/prisma/enums';
export declare class ProjectSkillDto {
    skillId: string;
    isPrimary?: boolean;
}
export declare class CreateProjectDto {
    title: string;
    slug?: string;
    summary: string;
    description: string;
    thumbnailUrl?: string;
    bannerUrl?: string;
    liveDemoUrl?: string;
    repoUrl?: string;
    featured?: boolean;
    status?: ProjectStatus;
    category?: ProjectCategory;
    sortOrder?: number;
    startedAt?: string;
    completedAt?: string;
    skills?: ProjectSkillDto[];
}
