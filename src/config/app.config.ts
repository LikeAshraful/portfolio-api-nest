import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => ({
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: parseInt(process.env.PORT ?? '3000', 10),
  apiPrefix: process.env.API_PREFIX ?? 'api/v1',
  databaseUrl: process.env.DATABASE_URL,
  jwt: {
    secret:
      process.env.JWT_SECRET ??
      'super-secret-jwt-portfolio-key-change-in-production-2026',
    expiresIn: process.env.JWT_EXPIRES_IN ?? '7d',
  },
  throttler: {
    ttl: parseInt(process.env.THROTTLE_TTL ?? '60', 10),
    limit: parseInt(process.env.THROTTLE_LIMIT ?? '100', 10),
  },
  corsOrigin: process.env.CORS_ORIGIN ?? '*',
  swaggerEnabled: process.env.SWAGGER_ENABLED === 'true',
}));
