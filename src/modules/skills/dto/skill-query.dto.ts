import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEnum, IsOptional } from 'class-validator';
import { PaginationQueryDto } from '../../../common/dto';
import { SkillCategory } from '../../../database/generated/prisma/enums';

export class SkillQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ enum: SkillCategory })
  @IsOptional()
  @IsEnum(SkillCategory)
  category?: SkillCategory;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return undefined;
  })
  @IsBoolean()
  featured?: boolean;
}
