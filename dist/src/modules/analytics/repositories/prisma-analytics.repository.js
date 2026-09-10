"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAnalyticsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const dto_1 = require("../../../common/dto");
const analytics_metric_entity_1 = require("../entities/analytics-metric.entity");
const enums_1 = require("../../../database/generated/prisma/enums");
let PrismaAnalyticsRepository = class PrismaAnalyticsRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async track(data) {
        const metric = await this.prisma.analyticsMetric.create({
            data: {
                type: data.type,
                identifier: data.identifier,
                referrer: data.referrer,
                userAgent: data.userAgent,
            },
        });
        return new analytics_metric_entity_1.AnalyticsMetricEntity(metric);
    }
    async getOverview() {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const [totalPageViews, totalResumeDownloads, totalProjects, totalArticles, totalInquiries, recentMetrics,] = await Promise.all([
            this.prisma.analyticsMetric.count({ where: { type: enums_1.MetricType.PAGE_VIEW } }),
            this.prisma.analyticsMetric.count({ where: { type: enums_1.MetricType.RESUME_DOWNLOAD } }),
            this.prisma.project.count({}),
            this.prisma.article.count({}),
            this.prisma.contactMessage.count({}),
            this.prisma.analyticsMetric.findMany({
                where: {
                    type: enums_1.MetricType.PAGE_VIEW,
                    createdAt: { gte: sevenDaysAgo },
                },
                select: { createdAt: true },
            }),
        ]);
        const dayCounts = {};
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
    async findAll(query) {
        const where = {};
        if (query.type) {
            where.type = query.type;
        }
        if (query.search) {
            where.OR = [
                { identifier: { contains: query.search, mode: 'insensitive' } },
                { referrer: { contains: query.search, mode: 'insensitive' } },
            ];
        }
        const orderBy = {
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
        const entities = metrics.map((m) => new analytics_metric_entity_1.AnalyticsMetricEntity(m));
        return new dto_1.PaginatedResult(entities, total, query.page, query.limit);
    }
};
exports.PrismaAnalyticsRepository = PrismaAnalyticsRepository;
exports.PrismaAnalyticsRepository = PrismaAnalyticsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaAnalyticsRepository);
//# sourceMappingURL=prisma-analytics.repository.js.map