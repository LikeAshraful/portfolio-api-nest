import { Role } from '../../../database/generated/prisma/enums';
export declare class UpdateUserDto {
    email?: string;
    name?: string;
    title?: string;
    bio?: string;
    avatarUrl?: string;
    location?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    twitterUrl?: string;
    websiteUrl?: string;
    resumeUrl?: string;
    role?: Role;
    isActive?: boolean;
}
