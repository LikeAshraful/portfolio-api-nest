import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { Role } from '../../../database/generated/prisma/enums';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'alex@example.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: 'Alex Morgan' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'Principal Cloud & Backend Architect' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    example: 'Passionate about microservices and performance tuning.',
  })
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiPropertyOptional({ example: 'https://example.com/avatar.jpg' })
  @IsOptional()
  @IsUrl()
  avatarUrl?: string;

  @ApiPropertyOptional({ example: 'San Francisco, CA' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ example: 'https://github.com/alexmorgan' })
  @IsOptional()
  @IsUrl()
  githubUrl?: string;

  @ApiPropertyOptional({ example: 'https://linkedin.com/in/alexmorgan' })
  @IsOptional()
  @IsUrl()
  linkedinUrl?: string;

  @ApiPropertyOptional({ example: 'https://twitter.com/alexmorgan' })
  @IsOptional()
  @IsUrl()
  twitterUrl?: string;

  @ApiPropertyOptional({ example: 'https://alexmorgan.dev' })
  @IsOptional()
  @IsUrl()
  websiteUrl?: string;

  @ApiPropertyOptional({ example: 'https://alexmorgan.dev/resume.pdf' })
  @IsOptional()
  @IsUrl()
  resumeUrl?: string;

  @ApiPropertyOptional({ enum: Role })
  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
