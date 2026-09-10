import { Module } from '@nestjs/common';
import { ANALYTICS_REPOSITORY } from './interfaces/analytics-repository.interface';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';
import { PrismaAnalyticsRepository } from './repositories/prisma-analytics.repository';

@Module({
  controllers: [AnalyticsController],
  providers: [
    AnalyticsService,
    {
      provide: ANALYTICS_REPOSITORY,
      useClass: PrismaAnalyticsRepository,
    },
  ],
  exports: [AnalyticsService, ANALYTICS_REPOSITORY],
})
export class AnalyticsModule {}
