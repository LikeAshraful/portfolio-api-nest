import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { AuthResponseDto, LoginDto, RegisterDto } from './dto';
import { UserResponseDto } from '../users/dto/user-response.dto';
import { JwtPayload } from './strategies/jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(dto: LoginDto): Promise<AuthResponseDto> {
    const user = await this.usersService.findByEmail(dto.email);

    console.log(user);

    if (!user || !user.passwordHash) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Account is disabled');
    }

    const isMatch = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return this.generateAuthResponse(user.id, user.email, user.role);
  }

  async register(dto: RegisterDto): Promise<AuthResponseDto> {
    const user = await this.usersService.create(dto);
    return this.generateAuthResponse(user.id, user.email, user.role);
  }

  async refreshToken(refreshToken: string): Promise<AuthResponseDto> {
    try {
      const secret =
        this.configService.get<string>('JWT_SECRET') ||
        'super-secret-jwt-portfolio-key-change-in-production-2026';

      const payload = this.jwtService.verify<JwtPayload>(refreshToken, {
        secret,
      });
      const user = await this.usersService.findById(payload.sub);

      if (!user || !user.isActive) {
        throw new UnauthorizedException('User no longer exists or is inactive');
      }

      return this.generateAuthResponse(user.id, user.email, user.role);
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }

  private async generateAuthResponse(
    userId: string,
    email: string,
    role: string,
  ): Promise<AuthResponseDto> {
    const payload: JwtPayload = { sub: userId, email, role };

    const expiresInString =
      this.configService.get<string>('JWT_EXPIRES_IN') || '7d';
    const expiresInSeconds = 7 * 24 * 60 * 60; // 7 days in seconds

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '1d' as any,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: expiresInString as any,
    });

    const user = await this.usersService.findById(userId);

    return {
      accessToken,
      refreshToken,
      expiresIn: expiresInSeconds,
      user: UserResponseDto.fromEntity(user),
    };
  }
}
