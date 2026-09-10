import { PrismaService } from '../../../database/prisma.service';
import { PaginatedResult, PaginationQueryDto } from '../../../common/dto';
import { UserEntity } from '../entities/user.entity';
import { CreateUserData, IUserRepository, UpdateUserData } from '../interfaces/user-repository.interface';
export declare class PrismaUserRepository implements IUserRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserData): Promise<UserEntity>;
    findById(id: string): Promise<UserEntity | null>;
    findByEmail(email: string): Promise<UserEntity | null>;
    findAll(query: PaginationQueryDto): Promise<PaginatedResult<UserEntity>>;
    update(id: string, data: UpdateUserData): Promise<UserEntity>;
    delete(id: string): Promise<boolean>;
    findAdminProfile(): Promise<UserEntity | null>;
}
