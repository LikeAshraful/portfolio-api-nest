import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PaginatedResult } from '../../common/dto';
import {
  ChangePasswordDto,
  CreateUserDto,
  UpdateUserDto,
  UserQueryDto,
} from './dto';
import { UserEntity } from './entities/user.entity';
import {
  IUserRepository,
  USER_REPOSITORY,
} from './interfaces/user-repository.interface';

@Injectable()
export class UsersService {
  private readonly saltRounds = 12;

  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  async create(dto: CreateUserDto): Promise<UserEntity> {
    const existing = await this.userRepository.findByEmail(dto.email);
    if (existing) {
      throw new ConflictException(
        `User with email "${dto.email}" already exists`,
      );
    }

    const passwordHash = await bcrypt.hash(dto.password, this.saltRounds);

    return this.userRepository.create({
      email: dto.email,
      passwordHash,
      name: dto.name,
      title: dto.title,
      bio: dto.bio,
      avatarUrl: dto.avatarUrl,
      location: dto.location,
      githubUrl: dto.githubUrl,
      linkedinUrl: dto.linkedinUrl,
      twitterUrl: dto.twitterUrl,
      websiteUrl: dto.websiteUrl,
      resumeUrl: dto.resumeUrl,
      role: dto.role,
    });
  }

  async findById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return user;
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.userRepository.findByEmail(email);
  }

  async findAll(query: UserQueryDto): Promise<PaginatedResult<UserEntity>> {
    return this.userRepository.findAll(query);
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserEntity> {
    await this.findById(id);

    if (dto.email) {
      const existing = await this.userRepository.findByEmail(dto.email);
      if (existing && existing.id !== id) {
        throw new ConflictException(`Email "${dto.email}" is already taken`);
      }
    }

    return this.userRepository.update(id, dto);
  }

  async changePassword(id: string, dto: ChangePasswordDto): Promise<void> {
    const user = await this.findById(id);

    if (!user.passwordHash) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(
      dto.currentPassword,
      user.passwordHash,
    );
    if (!isMatch) {
      throw new UnauthorizedException('Current password does not match');
    }

    const newPasswordHash = await bcrypt.hash(dto.newPassword, this.saltRounds);
    await this.userRepository.update(id, { passwordHash: newPasswordHash });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.userRepository.delete(id);
  }

  async getPublicProfile(): Promise<UserEntity> {
    const profile = await this.userRepository.findAdminProfile();
    if (!profile) {
      throw new NotFoundException(
        'Public portfolio profile has not been initialized',
      );
    }
    return profile;
  }
}
