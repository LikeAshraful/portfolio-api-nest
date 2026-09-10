import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from '../../../database/generated/prisma/enums';
import { UserEntity } from '../entities/user.entity';

export class UserResponseDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ example: 'alex@example.com' })
  email: string;

  @ApiProperty({ example: 'Alex Morgan' })
  name: string;

  @ApiPropertyOptional({ example: 'Senior Backend & Cloud Architect' })
  title?: string | null;

  @ApiPropertyOptional({
    example: 'Passionate about distributed systems and clean code.',
  })
  bio?: string | null;

  @ApiPropertyOptional({ example: 'https://example.com/avatar.jpg' })
  avatarUrl?: string | null;

  @ApiPropertyOptional({ example: 'San Francisco, CA' })
  location?: string | null;

  @ApiPropertyOptional({ example: 'https://github.com/alexmorgan' })
  githubUrl?: string | null;

  @ApiPropertyOptional({ example: 'https://linkedin.com/in/alexmorgan' })
  linkedinUrl?: string | null;

  @ApiPropertyOptional({ example: 'https://twitter.com/alexmorgan' })
  twitterUrl?: string | null;

  @ApiPropertyOptional({ example: 'https://alexmorgan.dev' })
  websiteUrl?: string | null;

  @ApiPropertyOptional({ example: 'https://alexmorgan.dev/resume.pdf' })
  resumeUrl?: string | null;

  @ApiProperty({ enum: Role, example: Role.ADMIN })
  role: Role;

  @ApiProperty({ example: true })
  isActive: boolean;

  @ApiProperty({ example: '2026-09-09T10:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2026-09-09T10:00:00.000Z' })
  updatedAt: Date;

  static fromEntity(entity: UserEntity): UserResponseDto {
    const dto = new UserResponseDto();
    dto.id = entity.id;
    dto.email = entity.email;
    dto.name = entity.name;
    dto.title = entity.title;
    dto.bio = entity.bio;
    dto.avatarUrl = entity.avatarUrl;
    dto.location = entity.location;
    dto.githubUrl = entity.githubUrl;
    dto.linkedinUrl = entity.linkedinUrl;
    dto.twitterUrl = entity.twitterUrl;
    dto.websiteUrl = entity.websiteUrl;
    dto.resumeUrl = entity.resumeUrl;
    dto.role = entity.role;
    dto.isActive = entity.isActive;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}
