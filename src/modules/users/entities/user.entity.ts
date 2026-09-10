import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from '../../../database/generated/prisma/enums';

export class UserEntity {
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

  passwordHash?: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
