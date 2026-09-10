import { PrismaService } from '../../../database/prisma.service';
import { PaginatedResult } from '../../../common/dto';
import { ProjectEntity } from '../entities/project.entity';
import { CreateProjectData, IProjectRepository, UpdateProjectData } from '../interfaces/project-repository.interface';
import { ProjectQueryDto } from '../dto/project-query.dto';
export declare class PrismaProjectRepository implements IProjectRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private mapToEntity;
    create(data: CreateProjectData): Promise<ProjectEntity>;
    findById(id: string): Promise<ProjectEntity | null>;
    findBySlug(slug: string): Promise<ProjectEntity | null>;
    findAll(query: ProjectQueryDto): Promise<PaginatedResult<ProjectEntity>>;
    update(id: string, data: UpdateProjectData): Promise<ProjectEntity>;
    delete(id: string): Promise<boolean>;
    findFeatured(): Promise<ProjectEntity[]>;
    incrementViews(id: string): Promise<void>;
    incrementLikes(id: string): Promise<number>;
}
