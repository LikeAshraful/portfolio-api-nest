import { PaginatedResult } from '../../common/dto';
import { CreateSkillDto, SkillQueryDto, UpdateSkillDto } from './dto';
import { SkillEntity } from './entities/skill.entity';
import { ISkillRepository } from './interfaces/skill-repository.interface';
export declare class SkillsService {
    private readonly skillRepository;
    constructor(skillRepository: ISkillRepository);
    create(dto: CreateSkillDto): Promise<SkillEntity>;
    findById(id: string): Promise<SkillEntity>;
    findAll(query: SkillQueryDto): Promise<PaginatedResult<SkillEntity>>;
    findGroupedByCategory(): Promise<Record<string, SkillEntity[]>>;
    update(id: string, dto: UpdateSkillDto): Promise<SkillEntity>;
    delete(id: string): Promise<void>;
}
