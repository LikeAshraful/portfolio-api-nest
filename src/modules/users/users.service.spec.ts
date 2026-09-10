import { ConflictException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
import { Role } from '../../database/generated/prisma/enums';
import { UserEntity } from './entities/user.entity';
import { IUserRepository, USER_REPOSITORY } from './interfaces/user-repository.interface';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let mockUserRepository: jest.Mocked<IUserRepository>;

  const mockUser = new UserEntity({
    id: '123e4567-e89b-12d3-a456-426614174000',
    email: 'alex@example.com',
    passwordHash: '$2b$12$eXampleHashedPasswordValue',
    name: 'Alex Morgan',
    title: 'Principal Architect',
    role: Role.ADMIN,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  beforeEach(async () => {
    mockUserRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findByEmail: jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      findAdminProfile: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: USER_REPOSITORY,
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user with hashed password', async () => {
      mockUserRepository.findByEmail.mockResolvedValue(null);
      mockUserRepository.create.mockResolvedValue(mockUser);

      const result = await service.create({
        email: 'alex@example.com',
        password: 'Password123!',
        name: 'Alex Morgan',
      });

      expect(mockUserRepository.findByEmail).toHaveBeenCalledWith('alex@example.com');
      expect(mockUserRepository.create).toHaveBeenCalledWith(
        expect.objectContaining({
          email: 'alex@example.com',
          name: 'Alex Morgan',
          passwordHash: expect.any(String),
        }),
      );
      expect(result).toEqual(mockUser);
    });

    it('should throw ConflictException if user email already exists', async () => {
      mockUserRepository.findByEmail.mockResolvedValue(mockUser);

      await expect(
        service.create({
          email: 'alex@example.com',
          password: 'Password123!',
          name: 'Alex Morgan',
        }),
      ).rejects.toThrow(ConflictException);
    });
  });

  describe('findById', () => {
    it('should return user if found', async () => {
      mockUserRepository.findById.mockResolvedValue(mockUser);

      const result = await service.findById(mockUser.id);
      expect(result).toEqual(mockUser);
    });

    it('should throw NotFoundException if user is not found', async () => {
      mockUserRepository.findById.mockResolvedValue(null);

      await expect(service.findById('non-existent-id')).rejects.toThrow(NotFoundException);
    });
  });

  describe('getPublicProfile', () => {
    it('should return public admin profile', async () => {
      mockUserRepository.findAdminProfile.mockResolvedValue(mockUser);

      const result = await service.getPublicProfile();
      expect(result).toEqual(mockUser);
    });

    it('should throw NotFoundException if admin profile is not initialized', async () => {
      mockUserRepository.findAdminProfile.mockResolvedValue(null);

      await expect(service.getPublicProfile()).rejects.toThrow(NotFoundException);
    });
  });
});
