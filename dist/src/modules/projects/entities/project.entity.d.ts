import { ProjectCategory, ProjectStatus } from '../../../database/generated/prisma/enums';
export declare class ProjectSkillInfo {
    skillId: string;
    name: string;
    iconUrl?: string | null;
    isPrimary: boolean;
}
export declare class ProjectEntity {
    id: string;
    title: string;
    slug: string;
    summary: string;
    description: string;
    thumbnailUrl?: string | null;
    bannerUrl?: string | null;
    liveDemoUrl?: string | null;
    repoUrl?: string | null;
    featured: boolean;
    status: ProjectStatus;
    category: ProjectCategory;
    sortOrder: number;
    viewsCount: number;
    likesCount: number;
    startedAt?: Date | null;
    completedAt?: Date | null;
    technologies: ProjectSkillInfo[];
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<ProjectEntity>);
}
