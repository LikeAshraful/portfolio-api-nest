import { ProjectCategory, ProjectStatus } from '../../../database/generated/prisma/enums';
import { ProjectSkillDto } from './create-project.dto';
export declare class UpdateProjectDto {
    title?: string;
    slug?: string;
    summary?: string;
    description?: string;
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
