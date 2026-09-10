import { PaginatedResult } from '../../common/dto';
import { CreateProjectDto, ProjectQueryDto, UpdateProjectDto } from './dto';
import { ProjectEntity } from './entities/project.entity';
import { IProjectRepository } from './interfaces/project-repository.interface';
export declare class ProjectsService {
    private readonly projectRepository;
    constructor(projectRepository: IProjectRepository);
    private generateSlug;
    create(dto: CreateProjectDto): Promise<ProjectEntity>;
    findById(id: string): Promise<ProjectEntity>;
    findBySlug(slug: string): Promise<ProjectEntity>;
    findBySlugOrId(identifier: string): Promise<ProjectEntity>;
    findAll(query: ProjectQueryDto): Promise<PaginatedResult<ProjectEntity>>;
    findFeatured(): Promise<ProjectEntity[]>;
    update(id: string, dto: UpdateProjectDto): Promise<ProjectEntity>;
    delete(id: string): Promise<void>;
    like(id: string): Promise<{
        likesCount: number;
    }>;
}
