import { CreateSkillDto, SkillQueryDto, SkillResponseDto, UpdateSkillDto } from './dto';
import { SkillsService } from './skills.service';
export declare class SkillsController {
    private readonly skillsService;
    constructor(skillsService: SkillsService);
    findGroupedByCategory(): Promise<Record<string, SkillResponseDto[]>>;
    findAll(query: SkillQueryDto): Promise<{
        items: SkillResponseDto[];
        meta: import("../../common").PaginationMetaDto;
    }>;
    findById(id: string): Promise<SkillResponseDto>;
    create(dto: CreateSkillDto): Promise<SkillResponseDto>;
    update(id: string, dto: UpdateSkillDto): Promise<SkillResponseDto>;
    delete(id: string): Promise<void>;
}
