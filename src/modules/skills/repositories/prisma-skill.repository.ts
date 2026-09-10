import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { PaginatedResult } from '../../../common/dto';
import { SkillEntity } from '../entities/skill.entity';
import {
  CreateSkillData,
  ISkillRepository,
  UpdateSkillData,
} from '../interfaces/skill-repository.interface';
import { SkillQueryDto } from '../dto/skill-query.dto';
import { Prisma } from '../../../database/generated/prisma/client';
import { SkillCategory } from '../../../database/generated/prisma/enums';

@Injectable()
export class PrismaSkillRepository implements ISkillRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateSkillData): Promise<SkillEntity> {
    const skill = await this.prisma.skill.create({
      data: {
        name: data.name,
        category: data.category ?? SkillCategory.BACKEND_FRAMEWORKS,
        proficiency: data.proficiency ?? 80,
        yearsOfExperience: data.yearsOfExperience ?? 1.0,
        iconUrl: data.iconUrl,
        isFeatured: data.isFeatured ?? false,
        sortOrder: data.sortOrder ?? 0,
      },
    });

    return new SkillEntity(skill);
  }

  async findById(id: string): Promise<SkillEntity | null> {
    const skill = await this.prisma.skill.findUnique({
      where: { id },
    });

    return skill ? new SkillEntity(skill) : null;
  }

  async findByName(name: string): Promise<SkillEntity | null> {
    const skill = await this.prisma.skill.findUnique({
      where: { name },
    });

    return skill ? new SkillEntity(skill) : null;
  }

  async findAll(query: SkillQueryDto): Promise<PaginatedResult<SkillEntity>> {
    const where: Prisma.SkillWhereInput = {};

    if (query.category) {
      where.category = query.category;
    }

    if (query.featured !== undefined) {
      where.isFeatured = query.featured;
    }

    if (query.search) {
      where.name = { contains: query.search, mode: 'insensitive' };
    }

    const orderBy: Prisma.SkillOrderByWithRelationInput = {
      [query.sortBy || 'sortOrder']: query.sortOrder || 'asc',
    };

    const [total, skills] = await Promise.all([
      this.prisma.skill.count({ where }),
      this.prisma.skill.findMany({
        where,
        skip: query.skip,
        take: query.limit,
        orderBy,
      }),
    ]);

    const entities = skills.map((s) => new SkillEntity(s));
    return new PaginatedResult(entities, total, query.page, query.limit);
  }

  async findGroupedByCategory(): Promise<Record<string, SkillEntity[]>> {
    const skills = await this.prisma.skill.findMany({
      orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }, { proficiency: 'desc' }],
    });

    const grouped: Record<string, SkillEntity[]> = {};

    for (const skill of skills) {
      if (!grouped[skill.category]) {
        grouped[skill.category] = [];
      }
      grouped[skill.category].push(new SkillEntity(skill));
    }

    return grouped;
  }

  async update(id: string, data: UpdateSkillData): Promise<SkillEntity> {
    const skill = await this.prisma.skill.update({
      where: { id },
      data: {
        ...(data.name !== undefined ? { name: data.name } : {}),
        ...(data.category !== undefined ? { category: data.category } : {}),
        ...(data.proficiency !== undefined ? { proficiency: data.proficiency } : {}),
        ...(data.yearsOfExperience !== undefined ? { yearsOfExperience: data.yearsOfExperience } : {}),
        ...(data.iconUrl !== undefined ? { iconUrl: data.iconUrl } : {}),
        ...(data.isFeatured !== undefined ? { isFeatured: data.isFeatured } : {}),
        ...(data.sortOrder !== undefined ? { sortOrder: data.sortOrder } : {}),
      },
    });

    return new SkillEntity(skill);
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.skill.delete({
      where: { id },
    });
    return true;
  }
}
