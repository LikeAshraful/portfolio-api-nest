import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { ApiPaginatedResponse, Public, Roles } from '../../common';
import { JwtAuthGuard, RolesGuard } from '../../common/guards';
import { Role } from '../../database/generated/prisma/enums';
import {
  AnalyticsOverviewDto,
  MetricQueryDto,
  TrackMetricDto,
} from './dto';
import { AnalyticsService } from './analytics.service';
import { AnalyticsMetricEntity } from './entities/analytics-metric.entity';

@ApiTags('Analytics & Telemetry')
@Controller('analytics')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Public()
  @Post('track')
  @ApiOperation({ summary: 'Track visitor interaction event (page view, resume download, project click)' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Metric recorded successfully',
    type: AnalyticsMetricEntity,
  })
  async track(@Body() dto: TrackMetricDto, @Req() req: Request): Promise<AnalyticsMetricEntity> {
    const userAgent = req.get('user-agent');
    return this.analyticsService.track(dto, userAgent);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Get('overview')
  @ApiOperation({ summary: 'Get overall portfolio analytics dashboard overview (Admin only)' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Analytics summary metrics',
    type: AnalyticsOverviewDto,
  })
  async getOverview(): Promise<AnalyticsOverviewDto> {
    return this.analyticsService.getOverview();
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Get('metrics')
  @ApiOperation({ summary: 'Get raw telemetry logs paginated (Admin only)' })
  @ApiPaginatedResponse(AnalyticsMetricEntity)
  async findAll(@Query() query: MetricQueryDto) {
    return this.analyticsService.findAll(query);
  }
}
