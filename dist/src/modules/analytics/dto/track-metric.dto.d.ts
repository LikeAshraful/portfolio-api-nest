import { MetricType } from '../../../database/generated/prisma/enums';
export declare class TrackMetricDto {
    type: MetricType;
    identifier?: string;
    referrer?: string;
}
