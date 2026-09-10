import { PrismaService } from '../../../database/prisma.service';
import { PaginatedResult, PaginationQueryDto } from '../../../common/dto';
import { AnalyticsMetricEntity } from '../entities/analytics-metric.entity';
import { AnalyticsOverview, IAnalyticsRepository, TrackMetricData } from '../interfaces/analytics-repository.interface';
import { MetricType } from '../../../database/generated/prisma/enums';
export declare class PrismaAnalyticsRepository implements IAnalyticsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    track(data: TrackMetricData): Promise<AnalyticsMetricEntity>;
    getOverview(): Promise<AnalyticsOverview>;
    findAll(query: PaginationQueryDto & {
        type?: MetricType;
    }): Promise<PaginatedResult<AnalyticsMetricEntity>>;
}
