import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SkillCategory } from '../../../database/generated/prisma/enums';

export class SkillEntity {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ example: 'TypeScript' })
  name: string;

  @ApiProperty({ enum: SkillCategory, example: SkillCategory.LANGUAGES })
  category: SkillCategory;

  @ApiProperty({ example: 95, description: 'Proficiency score (1-100)' })
  proficiency: number;

  @ApiProperty({
    example: 6.5,
    description: 'Years of professional experience',
  })
  yearsOfExperience: number;

  @ApiPropertyOptional({
    example: 'https://cdn.example.com/icons/typescript.svg',
  })
  iconUrl?: string | null;

  @ApiProperty({ example: true })
  isFeatured: boolean;

  @ApiProperty({ example: 1 })
  sortOrder: number;

  @ApiProperty({ example: '2026-01-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2026-01-01T00:00:00.000Z' })
  updatedAt: Date;

  constructor(partial: Partial<SkillEntity>) {
    Object.assign(this, partial);
  }
}
