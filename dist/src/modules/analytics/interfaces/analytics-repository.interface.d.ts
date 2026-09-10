import { PaginatedResult, PaginationQueryDto } from '../../../common/dto';
import { MetricType } from '../../../database/generated/prisma/enums';
import { AnalyticsMetricEntity } from '../entities/analytics-metric.entity';
export declare const ANALYTICS_REPOSITORY: unique symbol;
export interface TrackMetricData {
    type: MetricType;
    identifier?: string;
    referrer?: string;
    userAgent?: string;
}
export interface AnalyticsOverview {
    totalPageViews: number;
    totalResumeDownloads: number;
    totalProjects: number;
    totalArticles: number;
    totalInquiries: number;
    recentViewsLast7Days: {
        date: string;
        count: number;
    }[];
}
export interface IAnalyticsRepository {
    track(data: TrackMetricData): Promise<AnalyticsMetricEntity>;
    getOverview(): Promise<AnalyticsOverview>;
    findAll(query: PaginationQueryDto & {
        type?: MetricType;
    }): Promise<PaginatedResult<AnalyticsMetricEntity>>;
}
