import { CreateProjectDto, ProjectQueryDto, ProjectResponseDto, UpdateProjectDto } from './dto';
import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    findAll(query: ProjectQueryDto): Promise<{
        items: ProjectResponseDto[];
        meta: import("../../common").PaginationMetaDto;
    }>;
    findFeatured(): Promise<ProjectResponseDto[]>;
    findBySlugOrId(slugOrId: string): Promise<ProjectResponseDto>;
    like(id: string): Promise<{
        likesCount: number;
    }>;
    create(dto: CreateProjectDto): Promise<ProjectResponseDto>;
    update(id: string, dto: UpdateProjectDto): Promise<ProjectResponseDto>;
    delete(id: string): Promise<void>;
}
