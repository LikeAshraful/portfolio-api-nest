import { Role } from '../../../database/generated/prisma/enums';
import { UserEntity } from '../entities/user.entity';
export declare class UserResponseDto {
    id: string;
    email: string;
    name: string;
    title?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    location?: string | null;
    githubUrl?: string | null;
    linkedinUrl?: string | null;
    twitterUrl?: string | null;
    websiteUrl?: string | null;
    resumeUrl?: string | null;
    role: Role;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    static fromEntity(entity: UserEntity): UserResponseDto;
}
