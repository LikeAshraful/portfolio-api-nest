import { MetricType } from '../../../database/generated/prisma/enums';
export declare class AnalyticsMetricEntity {
    id: string;
    type: MetricType;
    identifier?: string | null;
    referrer?: string | null;
    userAgent?: string | null;
    createdAt: Date;
    constructor(partial: Partial<AnalyticsMetricEntity>);
}
