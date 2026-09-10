import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PaginatedResult } from '../../common/dto';
import { CreateProjectDto, ProjectQueryDto, UpdateProjectDto } from './dto';
import { ProjectEntity } from './entities/project.entity';
import { IProjectRepository, PROJECT_REPOSITORY } from './interfaces/project-repository.interface';

@Injectable()
export class ProjectsService {
  constructor(
    @Inject(PROJECT_REPOSITORY)
    private readonly projectRepository: IProjectRepository,
  ) {}

  private generateSlug(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  async create(dto: CreateProjectDto): Promise<ProjectEntity> {
    const slug = dto.slug ? this.generateSlug(dto.slug) : this.generateSlug(dto.title);

    const existing = await this.projectRepository.findBySlug(slug);
    if (existing) {
      throw new ConflictException(`Project with slug "${slug}" already exists`);
    }

    return this.projectRepository.create({
      title: dto.title,
      slug,
      summary: dto.summary,
      description: dto.description,
      thumbnailUrl: dto.thumbnailUrl,
      bannerUrl: dto.bannerUrl,
      liveDemoUrl: dto.liveDemoUrl,
      repoUrl: dto.repoUrl,
      featured: dto.featured,
      status: dto.status,
      category: dto.category,
      sortOrder: dto.sortOrder,
      startedAt: dto.startedAt ? new Date(dto.startedAt) : undefined,
      completedAt: dto.completedAt ? new Date(dto.completedAt) : undefined,
      skills: dto.skills?.map((s) => ({
        skillId: s.skillId,
        isPrimary: s.isPrimary,
      })),
    });
  }

  async findById(id: string): Promise<ProjectEntity> {
    const project = await this.projectRepository.findById(id);
    if (!project) {
      throw new NotFoundException(`Project with ID "${id}" not found`);
    }
    return project;
  }

  async findBySlug(slug: string): Promise<ProjectEntity> {
    const project = await this.projectRepository.findBySlug(slug);
    if (!project) {
      throw new NotFoundException(`Project with slug "${slug}" not found`);
    }
    return project;
  }

  async findBySlugOrId(identifier: string): Promise<ProjectEntity> {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      identifier,
    );

    const project = isUuid
      ? await this.projectRepository.findById(identifier)
      : await this.projectRepository.findBySlug(identifier);

    if (!project) {
      throw new NotFoundException(`Project "${identifier}" not found`);
    }

    // Increment view asynchronously
    this.projectRepository.incrementViews(project.id).catch(() => {});

    return project;
  }

  async findAll(query: ProjectQueryDto): Promise<PaginatedResult<ProjectEntity>> {
    return this.projectRepository.findAll(query);
  }

  async findFeatured(): Promise<ProjectEntity[]> {
    return this.projectRepository.findFeatured();
  }

  async update(id: string, dto: UpdateProjectDto): Promise<ProjectEntity> {
    await this.findById(id);

    let slug: string | undefined = undefined;
    if (dto.slug || dto.title) {
      slug = dto.slug ? this.generateSlug(dto.slug) : dto.title ? this.generateSlug(dto.title) : undefined;
      if (slug) {
        const existing = await this.projectRepository.findBySlug(slug);
        if (existing && existing.id !== id) {
          throw new ConflictException(`Project with slug "${slug}" already exists`);
        }
      }
    }

    return this.projectRepository.update(id, {
      title: dto.title,
      slug,
      summary: dto.summary,
      description: dto.description,
      thumbnailUrl: dto.thumbnailUrl,
      bannerUrl: dto.bannerUrl,
      liveDemoUrl: dto.liveDemoUrl,
      repoUrl: dto.repoUrl,
      featured: dto.featured,
      status: dto.status,
      category: dto.category,
      sortOrder: dto.sortOrder,
      startedAt: dto.startedAt ? new Date(dto.startedAt) : undefined,
      completedAt: dto.completedAt ? new Date(dto.completedAt) : undefined,
      skills: dto.skills?.map((s) => ({
        skillId: s.skillId,
        isPrimary: s.isPrimary,
      })),
    });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.projectRepository.delete(id);
  }

  async like(id: string): Promise<{ likesCount: number }> {
    await this.findById(id);
    const likesCount = await this.projectRepository.incrementLikes(id);
    return { likesCount };
  }
}
