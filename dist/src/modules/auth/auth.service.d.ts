import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthResponseDto, LoginDto, RegisterDto } from './dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    login(dto: LoginDto): Promise<AuthResponseDto>;
    register(dto: RegisterDto): Promise<AuthResponseDto>;
    refreshToken(refreshToken: string): Promise<AuthResponseDto>;
    private generateAuthResponse;
}
