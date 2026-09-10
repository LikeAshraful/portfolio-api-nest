import { PaginationQueryDto } from '../../common';
import { CreateEducationDto, CreateExperienceDto, EducationResponseDto, ExperienceResponseDto, UpdateEducationDto, UpdateExperienceDto } from './dto';
import { ExperiencesService } from './experiences.service';
export declare class ExperiencesController {
    private readonly experiencesService;
    constructor(experiencesService: ExperiencesService);
    findAllExperiences(query: PaginationQueryDto): Promise<{
        items: ExperienceResponseDto[];
        meta: import("../../common").PaginationMetaDto;
    }>;
    findAllEducations(): Promise<EducationResponseDto[]>;
    findEducationById(id: string): Promise<EducationResponseDto>;
    findExperienceById(id: string): Promise<ExperienceResponseDto>;
    createExperience(dto: CreateExperienceDto): Promise<ExperienceResponseDto>;
    updateExperience(id: string, dto: UpdateExperienceDto): Promise<ExperienceResponseDto>;
    deleteExperience(id: string): Promise<void>;
    createEducation(dto: CreateEducationDto): Promise<EducationResponseDto>;
    updateEducation(id: string, dto: UpdateEducationDto): Promise<EducationResponseDto>;
    deleteEducation(id: string): Promise<void>;
}
