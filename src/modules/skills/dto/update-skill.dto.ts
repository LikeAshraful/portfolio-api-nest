import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  Min,
} from 'class-validator';
import { SkillCategory } from '../../../database/generated/prisma/enums';

export class UpdateSkillDto {
  @ApiPropertyOptional({ example: 'TypeScript' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ enum: SkillCategory })
  @IsOptional()
  @IsEnum(SkillCategory)
  category?: SkillCategory;

  @ApiPropertyOptional({ example: 98, minimum: 1, maximum: 100 })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  proficiency?: number;

  @ApiPropertyOptional({ example: 7.0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  yearsOfExperience?: number;

  @ApiPropertyOptional({ example: 'https://cdn.example.com/icons/typescript.svg' })
  @IsOptional()
  @IsUrl()
  iconUrl?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  sortOrder?: number;
}
