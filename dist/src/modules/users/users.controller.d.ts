import { AuthenticatedUser } from '../../common';
import { ChangePasswordDto, CreateUserDto, UpdateUserDto, UserQueryDto, UserResponseDto } from './dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getPublicProfile(): Promise<UserResponseDto>;
    getMe(currentUser: AuthenticatedUser): Promise<UserResponseDto>;
    updateMe(currentUser: AuthenticatedUser, dto: UpdateUserDto): Promise<UserResponseDto>;
    changePassword(currentUser: AuthenticatedUser, dto: ChangePasswordDto): Promise<{
        message: string;
    }>;
    create(dto: CreateUserDto): Promise<UserResponseDto>;
    findAll(query: UserQueryDto): Promise<{
        items: UserResponseDto[];
        meta: import("../../common").PaginationMetaDto;
    }>;
    findById(id: string): Promise<UserResponseDto>;
    update(id: string, dto: UpdateUserDto): Promise<UserResponseDto>;
    delete(id: string): Promise<void>;
}
