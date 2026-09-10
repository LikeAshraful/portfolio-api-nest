import { PrismaService } from '../../../database/prisma.service';
import { PaginatedResult, PaginationQueryDto } from '../../../common/dto';
import { EducationEntity, ExperienceEntity } from '../entities/experience.entity';
import { CreateEducationData, CreateExperienceData, IExperienceRepository, UpdateEducationData, UpdateExperienceData } from '../interfaces/experience-repository.interface';
export declare class PrismaExperienceRepository implements IExperienceRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createExperience(data: CreateExperienceData): Promise<ExperienceEntity>;
    findExperienceById(id: string): Promise<ExperienceEntity | null>;
    findAllExperiences(query: PaginationQueryDto): Promise<PaginatedResult<ExperienceEntity>>;
    updateExperience(id: string, data: UpdateExperienceData): Promise<ExperienceEntity>;
    deleteExperience(id: string): Promise<boolean>;
    createEducation(data: CreateEducationData): Promise<EducationEntity>;
    findEducationById(id: string): Promise<EducationEntity | null>;
    findAllEducations(): Promise<EducationEntity[]>;
    updateEducation(id: string, data: UpdateEducationData): Promise<EducationEntity>;
    deleteEducation(id: string): Promise<boolean>;
}
