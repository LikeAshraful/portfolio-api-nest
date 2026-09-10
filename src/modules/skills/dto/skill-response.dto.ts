import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SkillCategory } from '../../../database/generated/prisma/enums';
import { SkillEntity } from '../entities/skill.entity';

export class SkillResponseDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ example: 'TypeScript' })
  name: string;

  @ApiProperty({ enum: SkillCategory, example: SkillCategory.LANGUAGES })
  category: SkillCategory;

  @ApiProperty({ example: 95 })
  proficiency: number;

  @ApiProperty({ example: 6.5 })
  yearsOfExperience: number;

  @ApiPropertyOptional({ example: 'https://cdn.example.com/icons/typescript.svg' })
  iconUrl?: string | null;

  @ApiProperty({ example: true })
  isFeatured: boolean;

  @ApiProperty({ example: 1 })
  sortOrder: number;

  @ApiProperty({ example: '2026-01-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2026-01-01T00:00:00.000Z' })
  updatedAt: Date;

  static fromEntity(entity: SkillEntity): SkillResponseDto {
    const dto = new SkillResponseDto();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.category = entity.category;
    dto.proficiency = entity.proficiency;
    dto.yearsOfExperience = entity.yearsOfExperience;
    dto.iconUrl = entity.iconUrl;
    dto.isFeatured = entity.isFeatured;
    dto.sortOrder = entity.sortOrder;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}
