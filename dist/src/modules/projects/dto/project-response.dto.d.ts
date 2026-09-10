import { ProjectCategory, ProjectStatus } from '../../../database/generated/prisma/enums';
import { ProjectEntity, ProjectSkillInfo } from '../entities/project.entity';
export declare class ProjectResponseDto {
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
    static fromEntity(entity: ProjectEntity): ProjectResponseDto;
}
