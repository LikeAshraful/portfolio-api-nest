import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { PaginationQueryDto } from '../../../common/dto';

export class ArticleQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ example: 'NestJS', description: 'Filter by tag' })
  @IsOptional()
  @IsString()
  tag?: string;

  @ApiPropertyOptional({ example: true, description: 'Filter by published status' })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return undefined;
  })
  @IsBoolean()
  published?: boolean;
}
