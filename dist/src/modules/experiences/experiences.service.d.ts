import { PaginatedResult, PaginationQueryDto } from '../../common/dto';
import { CreateEducationDto, CreateExperienceDto, UpdateEducationDto, UpdateExperienceDto } from './dto';
import { EducationEntity, ExperienceEntity } from './entities/experience.entity';
import { IExperienceRepository } from './interfaces/experience-repository.interface';
export declare class ExperiencesService {
    private readonly experienceRepository;
    constructor(experienceRepository: IExperienceRepository);
    createExperience(dto: CreateExperienceDto): Promise<ExperienceEntity>;
    findExperienceById(id: string): Promise<ExperienceEntity>;
    findAllExperiences(query: PaginationQueryDto): Promise<PaginatedResult<ExperienceEntity>>;
    updateExperience(id: string, dto: UpdateExperienceDto): Promise<ExperienceEntity>;
    deleteExperience(id: string): Promise<void>;
    createEducation(dto: CreateEducationDto): Promise<EducationEntity>;
    findEducationById(id: string): Promise<EducationEntity>;
    findAllEducations(): Promise<EducationEntity[]>;
    updateEducation(id: string, dto: UpdateEducationDto): Promise<EducationEntity>;
    deleteEducation(id: string): Promise<void>;
}
