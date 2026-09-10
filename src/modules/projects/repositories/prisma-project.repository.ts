import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { PaginatedResult } from '../../../common/dto';
import { ProjectEntity, ProjectSkillInfo } from '../entities/project.entity';
import {
  CreateProjectData,
  IProjectRepository,
  UpdateProjectData,
} from '../interfaces/project-repository.interface';
import { ProjectQueryDto } from '../dto/project-query.dto';
import { Prisma } from '../../../database/generated/prisma/client';
import { ProjectCategory, ProjectStatus } from '../../../database/generated/prisma/enums';

type PrismaProjectWithSkills = Prisma.ProjectGetPayload<{
  include: {
    technologies: {
      include: {
        skill: true;
      };
    };
  };
}>;

@Injectable()
export class PrismaProjectRepository implements IProjectRepository {
  constructor(private readonly prisma: PrismaService) {}

  private mapToEntity(project: PrismaProjectWithSkills): ProjectEntity {
    const technologies: ProjectSkillInfo[] = project.technologies.map((t) => ({
      skillId: t.skillId,
      name: t.skill.name,
      iconUrl: t.skill.iconUrl,
      isPrimary: t.isPrimary,
    }));

    return new ProjectEntity({
      ...project,
      technologies,
    });
  }

  async create(data: CreateProjectData): Promise<ProjectEntity> {
    const project = await this.prisma.project.create({
      data: {
        title: data.title,
        slug: data.slug,
        summary: data.summary,
        description: data.description,
        thumbnailUrl: data.thumbnailUrl,
        bannerUrl: data.bannerUrl,
        liveDemoUrl: data.liveDemoUrl,
        repoUrl: data.repoUrl,
        featured: data.featured ?? false,
        status: data.status ?? ProjectStatus.PUBLISHED,
        category: data.category ?? ProjectCategory.FULLSTACK,
        sortOrder: data.sortOrder ?? 0,
        startedAt: data.startedAt,
        completedAt: data.completedAt,
        technologies: data.skills?.length
          ? {
              create: data.skills.map((s) => ({
                skillId: s.skillId,
                isPrimary: s.isPrimary ?? false,
              })),
            }
          : undefined,
      },
      include: {
        technologies: {
          include: {
            skill: true,
          },
        },
      },
    });

    return this.mapToEntity(project);
  }

  async findById(id: string): Promise<ProjectEntity | null> {
    const project = await this.prisma.project.findUnique({
      where: { id },
      include: {
        technologies: {
          include: {
            skill: true,
          },
        },
      },
    });

    return project ? this.mapToEntity(project) : null;
  }

  async findBySlug(slug: string): Promise<ProjectEntity | null> {
    const project = await this.prisma.project.findUnique({
      where: { slug },
      include: {
        technologies: {
          include: {
            skill: true,
          },
        },
      },
    });

    return project ? this.mapToEntity(project) : null;
  }

  async findAll(query: ProjectQueryDto): Promise<PaginatedResult<ProjectEntity>> {
    const where: Prisma.ProjectWhereInput = {};

    if (query.category) {
      where.category = query.category;
    }

    if (query.status) {
      where.status = query.status;
    }

    if (query.featured !== undefined) {
      where.featured = query.featured;
    }

    if (query.skill) {
      where.technologies = {
        some: {
          skill: {
            name: { contains: query.skill, mode: 'insensitive' },
          },
        },
      };
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { summary: { contains: query.search, mode: 'insensitive' } },
        { description: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const orderBy: Prisma.ProjectOrderByWithRelationInput = {
      [query.sortBy || 'sortOrder']: query.sortOrder || 'asc',
    };

    const [total, projects] = await Promise.all([
      this.prisma.project.count({ where }),
      this.prisma.project.findMany({
        where,
        skip: query.skip,
        take: query.limit,
        orderBy,
        include: {
          technologies: {
            include: {
              skill: true,
            },
          },
        },
      }),
    ]);

    const entities = projects.map((p) => this.mapToEntity(p));
    return new PaginatedResult(entities, total, query.page, query.limit);
  }

  async update(id: string, data: UpdateProjectData): Promise<ProjectEntity> {
    const { skills, ...directFields } = data;

    const project = await this.prisma.$transaction(async (tx) => {
      if (skills !== undefined) {
        await tx.projectSkill.deleteMany({
          where: { projectId: id },
        });

        if (skills.length > 0) {
          await tx.projectSkill.createMany({
            data: skills.map((s) => ({
              projectId: id,
              skillId: s.skillId,
              isPrimary: s.isPrimary ?? false,
            })),
          });
        }
      }

      return tx.project.update({
        where: { id },
        data: {
          ...(directFields.title !== undefined ? { title: directFields.title } : {}),
          ...(directFields.slug !== undefined ? { slug: directFields.slug } : {}),
          ...(directFields.summary !== undefined ? { summary: directFields.summary } : {}),
          ...(directFields.description !== undefined ? { description: directFields.description } : {}),
          ...(directFields.thumbnailUrl !== undefined ? { thumbnailUrl: directFields.thumbnailUrl } : {}),
          ...(directFields.bannerUrl !== undefined ? { bannerUrl: directFields.bannerUrl } : {}),
          ...(directFields.liveDemoUrl !== undefined ? { liveDemoUrl: directFields.liveDemoUrl } : {}),
          ...(directFields.repoUrl !== undefined ? { repoUrl: directFields.repoUrl } : {}),
          ...(directFields.featured !== undefined ? { featured: directFields.featured } : {}),
          ...(directFields.status !== undefined ? { status: directFields.status } : {}),
          ...(directFields.category !== undefined ? { category: directFields.category } : {}),
          ...(directFields.sortOrder !== undefined ? { sortOrder: directFields.sortOrder } : {}),
          ...(directFields.startedAt !== undefined ? { startedAt: directFields.startedAt } : {}),
          ...(directFields.completedAt !== undefined ? { completedAt: directFields.completedAt } : {}),
        },
        include: {
          technologies: {
            include: {
              skill: true,
            },
          },
        },
      });
    });

    return this.mapToEntity(project);
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.project.delete({
      where: { id },
    });
    return true;
  }

  async findFeatured(): Promise<ProjectEntity[]> {
    const projects = await this.prisma.project.findMany({
      where: { featured: true, status: ProjectStatus.PUBLISHED },
      orderBy: { sortOrder: 'asc' },
      include: {
        technologies: {
          include: {
            skill: true,
          },
        },
      },
    });

    return projects.map((p) => this.mapToEntity(p));
  }

  async incrementViews(id: string): Promise<void> {
    await this.prisma.project.update({
      where: { id },
      data: { viewsCount: { increment: 1 } },
    });
  }

  async incrementLikes(id: string): Promise<number> {
    const updated = await this.prisma.project.update({
      where: { id },
      data: { likesCount: { increment: 1 } },
      select: { likesCount: true },
    });
    return updated.likesCount;
  }
}
