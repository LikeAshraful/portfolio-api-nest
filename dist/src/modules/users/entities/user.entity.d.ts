import { Role } from '../../../database/generated/prisma/enums';
export declare class UserEntity {
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
    passwordHash?: string;
    constructor(partial: Partial<UserEntity>);
}
