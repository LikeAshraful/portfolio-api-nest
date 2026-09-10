import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
  HealthIndicatorResult,
  PrismaHealthIndicator,
} from '@nestjs/terminus';
import { Public } from '../../common';
import { PrismaService } from '../../database/prisma.service';

@ApiTags('Health & Monitoring')
@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly prismaHealth: PrismaHealthIndicator,
    private readonly prismaService: PrismaService,
  ) {}

  @Public()
  @Get()
  @HealthCheck()
  @ApiOperation({ summary: 'Perform system liveness and database health check' })
  @ApiResponse({ status: 200, description: 'System is healthy' })
  async check(): Promise<HealthCheckResult> {
    return this.health.check([
      async (): Promise<HealthIndicatorResult> =>
        this.prismaHealth.pingCheck('database', this.prismaService),
    ]);
  }
}
