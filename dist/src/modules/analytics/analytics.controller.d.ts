import { Request } from 'express';
import { AnalyticsOverviewDto, MetricQueryDto, TrackMetricDto } from './dto';
import { AnalyticsService } from './analytics.service';
import { AnalyticsMetricEntity } from './entities/analytics-metric.entity';
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    track(dto: TrackMetricDto, req: Request): Promise<AnalyticsMetricEntity>;
    getOverview(): Promise<AnalyticsOverviewDto>;
    findAll(query: MetricQueryDto): Promise<import("../../common").PaginatedResult<AnalyticsMetricEntity>>;
}
