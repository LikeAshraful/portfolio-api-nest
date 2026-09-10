import { UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
import { Role } from '../../database/generated/prisma/enums';
import { UserEntity } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let usersService: jest.Mocked<UsersService>;
  let jwtService: jest.Mocked<JwtService>;
  let configService: jest.Mocked<ConfigService>;

  const mockUser = new UserEntity({
    id: '123e4567-e89b-12d3-a456-426614174000',
    email: 'alex@example.com',
    passwordHash: '$2b$12$hashedPasswordPlaceholder',
    name: 'Alex Morgan',
    role: Role.ADMIN,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  beforeEach(async () => {
    usersService = {
      findByEmail: jest.fn(),
      findById: jest.fn(),
      create: jest.fn(),
    } as unknown as jest.Mocked<UsersService>;

    jwtService = {
      sign: jest.fn().mockReturnValue('mock-jwt-token'),
      verify: jest.fn(),
    } as unknown as jest.Mocked<JwtService>;

    configService = {
      get: jest.fn().mockImplementation((key: string) => {
        if (key === 'JWT_SECRET') return 'super-secret-jwt-key';
        if (key === 'JWT_EXPIRES_IN') return '7d';
        return null;
      }),
    } as unknown as jest.Mocked<ConfigService>;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: usersService },
        { provide: JwtService, useValue: jwtService },
        { provide: ConfigService, useValue: configService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('login', () => {
    it('should throw UnauthorizedException if user not found', async () => {
      usersService.findByEmail.mockResolvedValue(null);

      await expect(
        service.login({ email: 'unknown@example.com', password: 'password' }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('should authenticate user and return tokens when credentials match', async () => {
      const realHash = await bcrypt.hash('CorrectPassword123!', 10);
      const userWithRealHash = new UserEntity({ ...mockUser, passwordHash: realHash });

      usersService.findByEmail.mockResolvedValue(userWithRealHash);
      usersService.findById.mockResolvedValue(userWithRealHash);

      const result = await service.login({
        email: 'alex@example.com',
        password: 'CorrectPassword123!',
      });

      expect(result).toHaveProperty('accessToken', 'mock-jwt-token');
      expect(result).toHaveProperty('refreshToken', 'mock-jwt-token');
      expect(result.user.email).toBe('alex@example.com');
    });
  });
});
