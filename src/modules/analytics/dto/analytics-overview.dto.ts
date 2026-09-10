import { ApiProperty } from '@nestjs/swagger';

export class DailyViewCountDto {
  @ApiProperty({ example: '2026-09-08' })
  date: string;

  @ApiProperty({ example: 145 })
  count: number;
}

export class AnalyticsOverviewDto {
  @ApiProperty({ example: 4520 })
  totalPageViews: number;

  @ApiProperty({ example: 215 })
  totalResumeDownloads: number;

  @ApiProperty({ example: 12 })
  totalProjects: number;

  @ApiProperty({ example: 8 })
  totalArticles: number;

  @ApiProperty({ example: 34 })
  totalInquiries: number;

  @ApiProperty({ type: [DailyViewCountDto] })
  recentViewsLast7Days: DailyViewCountDto[];
}
