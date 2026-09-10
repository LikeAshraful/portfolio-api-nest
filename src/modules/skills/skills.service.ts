import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PaginatedResult } from '../../common/dto';
import { CreateSkillDto, SkillQueryDto, UpdateSkillDto } from './dto';
import { SkillEntity } from './entities/skill.entity';
import { ISkillRepository, SKILL_REPOSITORY } from './interfaces/skill-repository.interface';

@Injectable()
export class SkillsService {
  constructor(
    @Inject(SKILL_REPOSITORY)
    private readonly skillRepository: ISkillRepository,
  ) {}

  async create(dto: CreateSkillDto): Promise<SkillEntity> {
    const existing = await this.skillRepository.findByName(dto.name);
    if (existing) {
      throw new ConflictException(`Skill with name "${dto.name}" already exists`);
    }

    return this.skillRepository.create(dto);
  }

  async findById(id: string): Promise<SkillEntity> {
    const skill = await this.skillRepository.findById(id);
    if (!skill) {
      throw new NotFoundException(`Skill with ID "${id}" not found`);
    }
    return skill;
  }

  async findAll(query: SkillQueryDto): Promise<PaginatedResult<SkillEntity>> {
    return this.skillRepository.findAll(query);
  }

  async findGroupedByCategory(): Promise<Record<string, SkillEntity[]>> {
    return this.skillRepository.findGroupedByCategory();
  }

  async update(id: string, dto: UpdateSkillDto): Promise<SkillEntity> {
    await this.findById(id);

    if (dto.name) {
      const existing = await this.skillRepository.findByName(dto.name);
      if (existing && existing.id !== id) {
        throw new ConflictException(`Skill with name "${dto.name}" already exists`);
      }
    }

    return this.skillRepository.update(id, dto);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.skillRepository.delete(id);
  }
}
