import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);

  constructor(configService: ConfigService) {
    const databaseUrl =
      configService.get<string>('DATABASE_URL') ||
      process.env.DATABASE_URL ||
      'postgresql://postgres:postgres@localhost:5432/nest_portfolio?schema=public';

    const adapter = new PrismaPg({
      connectionString: databaseUrl,
      connectionTimeoutMillis: 5000,
    });

    super({ adapter });
  }

  async onModuleInit(): Promise<void> {
    try {
      await this.$connect();
      this.logger.log('Successfully connected to PostgreSQL via Prisma 7 Driver Adapter');
    } catch (error) {
      this.logger.warn(
        `Database connection deferred or failed at startup: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
    this.logger.log('Prisma client disconnected');
  }

  async cleanDatabase(): Promise<void> {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('cleanDatabase not allowed in production');
    }

    const models = [
      'analyticsMetric',
      'contactMessage',
      'article',
      'education',
      'experience',
      'projectSkill',
      'skill',
      'project',
      'user',
    ] as const;

    for (const model of models) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (this as any)[model].deleteMany({});
    }
  }
}
