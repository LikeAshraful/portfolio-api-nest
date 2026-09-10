import { AuthenticatedUser } from '../../common';
import { AuthService } from './auth.service';
import { AuthResponseDto, LoginDto, RefreshTokenDto, RegisterDto } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<AuthResponseDto>;
    register(dto: RegisterDto): Promise<AuthResponseDto>;
    refresh(dto: RefreshTokenDto): Promise<AuthResponseDto>;
    getMe(currentUser: AuthenticatedUser): Promise<AuthenticatedUser>;
}
