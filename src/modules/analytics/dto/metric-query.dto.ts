import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { PaginationQueryDto } from '../../../common/dto';
import { MetricType } from '../../../database/generated/prisma/enums';

export class MetricQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ enum: MetricType })
  @IsOptional()
  @IsEnum(MetricType)
  type?: MetricType;
}
