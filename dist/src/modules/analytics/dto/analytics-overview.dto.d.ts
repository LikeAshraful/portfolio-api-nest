export declare class DailyViewCountDto {
    date: string;
    count: number;
}
export declare class AnalyticsOverviewDto {
    totalPageViews: number;
    totalResumeDownloads: number;
    totalProjects: number;
    totalArticles: number;
    totalInquiries: number;
    recentViewsLast7Days: DailyViewCountDto[];
}
