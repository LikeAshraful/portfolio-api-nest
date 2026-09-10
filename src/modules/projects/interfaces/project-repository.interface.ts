import { PaginatedResult } from '../../../common/dto';
import { ProjectEntity } from '../entities/project.entity';
import { ProjectCategory, ProjectStatus } from '../../../database/generated/prisma/enums';
import { ProjectQueryDto } from '../dto/project-query.dto';

export const PROJECT_REPOSITORY = Symbol('PROJECT_REPOSITORY');

export interface ProjectSkillInput {
  skillId: string;
  isPrimary?: boolean;
}

export interface CreateProjectData {
  title: string;
  slug: string;
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
  startedAt?: Date;
  completedAt?: Date;
  skills?: ProjectSkillInput[];
}

export interface UpdateProjectData {
  title?: string;
  slug?: string;
  summary?: string;
  description?: string;
  thumbnailUrl?: string | null;
  bannerUrl?: string | null;
  liveDemoUrl?: string | null;
  repoUrl?: string | null;
  featured?: boolean;
  status?: ProjectStatus;
  category?: ProjectCategory;
  sortOrder?: number;
  startedAt?: Date | null;
  completedAt?: Date | null;
  skills?: ProjectSkillInput[];
}

export interface IProjectRepository {
  create(data: CreateProjectData): Promise<ProjectEntity>;
  findById(id: string): Promise<ProjectEntity | null>;
  findBySlug(slug: string): Promise<ProjectEntity | null>;
  findAll(query: ProjectQueryDto): Promise<PaginatedResult<ProjectEntity>>;
  update(id: string, data: UpdateProjectData): Promise<ProjectEntity>;
  delete(id: string): Promise<boolean>;
  findFeatured(): Promise<ProjectEntity[]>;
  incrementViews(id: string): Promise<void>;
  incrementLikes(id: string): Promise<number>;
}
