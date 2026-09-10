import { PaginatedResult } from '../../common/dto';
import { ChangePasswordDto, CreateUserDto, UpdateUserDto, UserQueryDto } from './dto';
import { UserEntity } from './entities/user.entity';
import { IUserRepository } from './interfaces/user-repository.interface';
export declare class UsersService {
    private readonly userRepository;
    private readonly saltRounds;
    constructor(userRepository: IUserRepository);
    create(dto: CreateUserDto): Promise<UserEntity>;
    findById(id: string): Promise<UserEntity>;
    findByEmail(email: string): Promise<UserEntity | null>;
    findAll(query: UserQueryDto): Promise<PaginatedResult<UserEntity>>;
    update(id: string, dto: UpdateUserDto): Promise<UserEntity>;
    changePassword(id: string, dto: ChangePasswordDto): Promise<void>;
    delete(id: string): Promise<void>;
    getPublicProfile(): Promise<UserEntity>;
}
