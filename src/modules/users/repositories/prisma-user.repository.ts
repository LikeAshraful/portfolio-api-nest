import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { PaginatedResult, PaginationQueryDto } from '../../../common/dto';
import { UserEntity } from '../entities/user.entity';
import {
  CreateUserData,
  IUserRepository,
  UpdateUserData,
} from '../interfaces/user-repository.interface';
import { Prisma } from '../../../database/generated/prisma/client';
import { Role } from '../../../database/generated/prisma/enums';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserData): Promise<UserEntity> {
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        passwordHash: data.passwordHash,
        name: data.name,
        title: data.title,
        bio: data.bio,
        avatarUrl: data.avatarUrl,
        location: data.location,
        githubUrl: data.githubUrl,
        linkedinUrl: data.linkedinUrl,
        twitterUrl: data.twitterUrl,
        websiteUrl: data.websiteUrl,
        resumeUrl: data.resumeUrl,
        role: data.role ? (data.role as Role) : Role.USER,
      },
    });

    return new UserEntity(user);
  }

  async findById(id: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    return user ? new UserEntity(user) : null;
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    return user ? new UserEntity(user) : null;
  }

  async findAll(
    query: PaginationQueryDto,
  ): Promise<PaginatedResult<UserEntity>> {
    const where: Prisma.UserWhereInput = {};

    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: 'insensitive' } },
        { email: { contains: query.search, mode: 'insensitive' } },
        { title: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const orderBy: Prisma.UserOrderByWithRelationInput = {
      [query.sortBy || 'createdAt']: query.sortOrder || 'desc',
    };

    const [total, users] = await Promise.all([
      this.prisma.user.count({ where }),
      this.prisma.user.findMany({
        where,
        skip: query.skip,
        take: query.limit,
        orderBy,
      }),
    ]);

    const entities = users.map((u) => new UserEntity(u));
    return new PaginatedResult(entities, total, query.page, query.limit);
  }

  async update(id: string, data: UpdateUserData): Promise<UserEntity> {
    const user = await this.prisma.user.update({
      where: { id },
      data: {
        ...(data.email ? { email: data.email.toLowerCase().trim() } : {}),
        ...(data.passwordHash ? { passwordHash: data.passwordHash } : {}),
        ...(data.name ? { name: data.name } : {}),
        ...(data.title !== undefined ? { title: data.title } : {}),
        ...(data.bio !== undefined ? { bio: data.bio } : {}),
        ...(data.avatarUrl !== undefined ? { avatarUrl: data.avatarUrl } : {}),
        ...(data.location !== undefined ? { location: data.location } : {}),
        ...(data.githubUrl !== undefined ? { githubUrl: data.githubUrl } : {}),
        ...(data.linkedinUrl !== undefined
          ? { linkedinUrl: data.linkedinUrl }
          : {}),
        ...(data.twitterUrl !== undefined
          ? { twitterUrl: data.twitterUrl }
          : {}),
        ...(data.websiteUrl !== undefined
          ? { websiteUrl: data.websiteUrl }
          : {}),
        ...(data.resumeUrl !== undefined ? { resumeUrl: data.resumeUrl } : {}),
        ...(data.role ? { role: data.role as Role } : {}),
        ...(data.isActive !== undefined ? { isActive: data.isActive } : {}),
      },
    });

    return new UserEntity(user);
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.user.delete({
      where: { id },
    });
    return true;
  }

  async findAdminProfile(): Promise<UserEntity | null> {
    const user = await this.prisma.user.findFirst({
      where: { role: Role.ADMIN, isActive: true },
      orderBy: { createdAt: 'asc' },
    });

    return user ? new UserEntity(user) : null;
  }
}
