import { Inject, Injectable } from '@nestjs/common';
import { PaginatedResult } from '../../common/dto';
import {
  AnalyticsOverviewDto,
  MetricQueryDto,
  TrackMetricDto,
} from './dto';
import { AnalyticsMetricEntity } from './entities/analytics-metric.entity';
import {
  ANALYTICS_REPOSITORY,
  IAnalyticsRepository,
} from './interfaces/analytics-repository.interface';

@Injectable()
export class AnalyticsService {
  constructor(
    @Inject(ANALYTICS_REPOSITORY)
    private readonly analyticsRepository: IAnalyticsRepository,
  ) {}

  async track(dto: TrackMetricDto, userAgent?: string): Promise<AnalyticsMetricEntity> {
    return this.analyticsRepository.track({
      type: dto.type,
      identifier: dto.identifier,
      referrer: dto.referrer,
      userAgent,
    });
  }

  async getOverview(): Promise<AnalyticsOverviewDto> {
    return this.analyticsRepository.getOverview();
  }

  async findAll(query: MetricQueryDto): Promise<PaginatedResult<AnalyticsMetricEntity>> {
    return this.analyticsRepository.findAll(query);
  }
}
