import { HealthCheckResult, HealthCheckService, PrismaHealthIndicator } from '@nestjs/terminus';
import { PrismaService } from '../../database/prisma.service';
export declare class HealthController {
    private readonly health;
    private readonly prismaHealth;
    private readonly prismaService;
    constructor(health: HealthCheckService, prismaHealth: PrismaHealthIndicator, prismaService: PrismaService);
    check(): Promise<HealthCheckResult>;
}
