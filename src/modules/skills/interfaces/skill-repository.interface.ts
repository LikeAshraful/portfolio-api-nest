import { PaginatedResult } from '../../../common/dto';
import { SkillCategory } from '../../../database/generated/prisma/enums';
import { SkillQueryDto } from '../dto/skill-query.dto';
import { SkillEntity } from '../entities/skill.entity';

export const SKILL_REPOSITORY = Symbol('SKILL_REPOSITORY');

export interface CreateSkillData {
  name: string;
  category?: SkillCategory;
  proficiency?: number;
  yearsOfExperience?: number;
  iconUrl?: string;
  isFeatured?: boolean;
  sortOrder?: number;
}

export interface UpdateSkillData {
  name?: string;
  category?: SkillCategory;
  proficiency?: number;
  yearsOfExperience?: number;
  iconUrl?: string | null;
  isFeatured?: boolean;
  sortOrder?: number;
}

export interface ISkillRepository {
  create(data: CreateSkillData): Promise<SkillEntity>;
  findById(id: string): Promise<SkillEntity | null>;
  findByName(name: string): Promise<SkillEntity | null>;
  findAll(query: SkillQueryDto): Promise<PaginatedResult<SkillEntity>>;
  findGroupedByCategory(): Promise<Record<string, SkillEntity[]>>;
  update(id: string, data: UpdateSkillData): Promise<SkillEntity>;
  delete(id: string): Promise<boolean>;
}
