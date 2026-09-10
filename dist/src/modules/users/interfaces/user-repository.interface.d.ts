import { PaginatedResult, PaginationQueryDto } from '../../../common/dto';
import { UserEntity } from '../entities/user.entity';
export declare const USER_REPOSITORY: unique symbol;
export interface CreateUserData {
    email: string;
    passwordHash: string;
    name: string;
    title?: string;
    bio?: string;
    avatarUrl?: string;
    location?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    twitterUrl?: string;
    websiteUrl?: string;
    resumeUrl?: string;
    role?: 'ADMIN' | 'USER' | 'GUEST';
}
export interface UpdateUserData {
    email?: string;
    passwordHash?: string;
    name?: string;
    title?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    location?: string | null;
    githubUrl?: string | null;
    linkedinUrl?: string | null;
    twitterUrl?: string | null;
    websiteUrl?: string | null;
    resumeUrl?: string | null;
    role?: 'ADMIN' | 'USER' | 'GUEST';
    isActive?: boolean;
}
export interface IUserRepository {
    create(data: CreateUserData): Promise<UserEntity>;
    findById(id: string): Promise<UserEntity | null>;
    findByEmail(email: string): Promise<UserEntity | null>;
    findAll(query: PaginationQueryDto): Promise<PaginatedResult<UserEntity>>;
    update(id: string, data: UpdateUserData): Promise<UserEntity>;
    delete(id: string): Promise<boolean>;
    findAdminProfile(): Promise<UserEntity | null>;
}
