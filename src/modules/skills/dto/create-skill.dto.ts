import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  Min,
} from 'class-validator';
import { SkillCategory } from '../../../database/generated/prisma/enums';

export class CreateSkillDto {
  @ApiProperty({ example: 'TypeScript', description: 'Unique skill name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ enum: SkillCategory, default: SkillCategory.BACKEND_FRAMEWORKS })
  @IsOptional()
  @IsEnum(SkillCategory)
  category?: SkillCategory;

  @ApiPropertyOptional({ example: 95, minimum: 1, maximum: 100, default: 80 })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  proficiency?: number;

  @ApiPropertyOptional({ example: 6.5, default: 1.0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  yearsOfExperience?: number;

  @ApiPropertyOptional({ example: 'https://cdn.example.com/icons/typescript.svg' })
  @IsOptional()
  @IsUrl()
  iconUrl?: string;

  @ApiPropertyOptional({ example: true, default: false })
  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @ApiPropertyOptional({ example: 1, default: 0 })
  @IsOptional()
  @IsInt()
  sortOrder?: number;
}
