import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { PaginatedResult, PaginationQueryDto } from '../../../common/dto';
import { AnalyticsMetricEntity } from '../entities/analytics-metric.entity';
import {
  AnalyticsOverview,
  IAnalyticsRepository,
  TrackMetricData,
} from '../interfaces/analytics-repository.interface';
import { Prisma } from '../../../database/generated/prisma/client';
import { MetricType } from '../../../database/generated/prisma/enums';

@Injectable()
export class PrismaAnalyticsRepository implements IAnalyticsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async track(data: TrackMetricData): Promise<AnalyticsMetricEntity> {
    const metric = await this.prisma.analyticsMetric.create({
      data: {
        type: data.type,
        identifier: data.identifier,
        referrer: data.referrer,
        userAgent: data.userAgent,
      },
    });

    return new AnalyticsMetricEntity(metric);
  }

  async getOverview(): Promise<AnalyticsOverview> {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const [
      totalPageViews,
      totalResumeDownloads,
      totalProjects,
      totalArticles,
      totalInquiries,
      recentMetrics,
    ] = await Promise.all([
      this.prisma.analyticsMetric.count({ where: { type: MetricType.PAGE_VIEW } }),
      this.prisma.analyticsMetric.count({ where: { type: MetricType.RESUME_DOWNLOAD } }),
      this.prisma.project.count({}),
      this.prisma.article.count({}),
      this.prisma.contactMessage.count({}),
      this.prisma.analyticsMetric.findMany({
        where: {
          type: MetricType.PAGE_VIEW,
          createdAt: { gte: sevenDaysAgo },
        },
        select: { createdAt: true },
      }),
    ]);

    // Aggregate views by day
    const dayCounts: Record<string, number> = {};
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      dayCounts[dateStr] = 0;
    }

    for (const metric of recentMetrics) {
      const dateStr = metric.createdAt.toISOString().split('T')[0];
      if (dayCounts[dateStr] !== undefined) {
        dayCounts[dateStr]++;
      }
    }

    const recentViewsLast7Days = Object.entries(dayCounts).map(([date, count]) => ({
      date,
      count,
    }));

    return {
      totalPageViews,
      totalResumeDownloads,
      totalProjects,
      totalArticles,
      totalInquiries,
      recentViewsLast7Days,
    };
  }

  async findAll(
    query: PaginationQueryDto & { type?: MetricType },
  ): Promise<PaginatedResult<AnalyticsMetricEntity>> {
    const where: Prisma.AnalyticsMetricWhereInput = {};

    if (query.type) {
      where.type = query.type;
    }

    if (query.search) {
      where.OR = [
        { identifier: { contains: query.search, mode: 'insensitive' } },
        { referrer: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const orderBy: Prisma.AnalyticsMetricOrderByWithRelationInput = {
      [query.sortBy || 'createdAt']: query.sortOrder || 'desc',
    };

    const [total, metrics] = await Promise.all([
      this.prisma.analyticsMetric.count({ where }),
      this.prisma.analyticsMetric.findMany({
        where,
        skip: query.skip,
        take: query.limit,
        orderBy,
      }),
    ]);

    const entities = metrics.map((m) => new AnalyticsMetricEntity(m));
    return new PaginatedResult(entities, total, query.page, query.limit);
  }
}
