import { PrismaService } from '../../../database/prisma.service';
import { PaginatedResult } from '../../../common/dto';
import { SkillEntity } from '../entities/skill.entity';
import { CreateSkillData, ISkillRepository, UpdateSkillData } from '../interfaces/skill-repository.interface';
import { SkillQueryDto } from '../dto/skill-query.dto';
export declare class PrismaSkillRepository implements ISkillRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateSkillData): Promise<SkillEntity>;
    findById(id: string): Promise<SkillEntity | null>;
    findByName(name: string): Promise<SkillEntity | null>;
    findAll(query: SkillQueryDto): Promise<PaginatedResult<SkillEntity>>;
    findGroupedByCategory(): Promise<Record<string, SkillEntity[]>>;
    update(id: string, data: UpdateSkillData): Promise<SkillEntity>;
    delete(id: string): Promise<boolean>;
}
