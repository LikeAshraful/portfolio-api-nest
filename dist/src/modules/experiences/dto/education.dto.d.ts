import { EducationEntity } from '../entities/experience.entity';
export declare class CreateEducationDto {
    institution: string;
    degree: string;
    fieldOfStudy?: string;
    startDate: string;
    endDate?: string;
    isCurrent?: boolean;
    grade?: string;
    description?: string;
    credentialUrl?: string;
    sortOrder?: number;
}
export declare class UpdateEducationDto {
    institution?: string;
    degree?: string;
    fieldOfStudy?: string;
    startDate?: string;
    endDate?: string;
    isCurrent?: boolean;
    grade?: string;
    description?: string;
    credentialUrl?: string;
    sortOrder?: number;
}
export declare class EducationResponseDto {
    id: string;
    institution: string;
    degree: string;
    fieldOfStudy?: string | null;
    startDate: Date;
    endDate?: Date | null;
    isCurrent: boolean;
    grade?: string | null;
    description?: string | null;
    credentialUrl?: string | null;
    sortOrder: number;
    createdAt: Date;
    updatedAt: Date;
    static fromEntity(entity: EducationEntity): EducationResponseDto;
}
