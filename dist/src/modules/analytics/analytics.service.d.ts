import { PaginatedResult } from '../../common/dto';
import { AnalyticsOverviewDto, MetricQueryDto, TrackMetricDto } from './dto';
import { AnalyticsMetricEntity } from './entities/analytics-metric.entity';
import { IAnalyticsRepository } from './interfaces/analytics-repository.interface';
export declare class AnalyticsService {
    private readonly analyticsRepository;
    constructor(analyticsRepository: IAnalyticsRepository);
    track(dto: TrackMetricDto, userAgent?: string): Promise<AnalyticsMetricEntity>;
    getOverview(): Promise<AnalyticsOverviewDto>;
    findAll(query: MetricQueryDto): Promise<PaginatedResult<AnalyticsMetricEntity>>;
}
