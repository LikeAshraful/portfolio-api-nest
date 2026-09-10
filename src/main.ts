import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  const apiPrefix = configService.get<string>('API_PREFIX') || 'api/v1';
  const corsOrigin = configService.get<string>('CORS_ORIGIN') || '*';
  const swaggerEnabled = configService.get<boolean>('SWAGGER_ENABLED') ?? true;

  // Global API Routing Prefix
  app.setGlobalPrefix(apiPrefix);

  // Enable CORS
  app.enableCors({
    origin: corsOrigin === '*' ? true : corsOrigin.split(','),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Global DTO Validation & Transformation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Enable Graceful Shutdown Hooks
  app.enableShutdownHooks();

  // Swagger OpenAPI 3.0 Documentation Setup
  if (swaggerEnabled) {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Portfolio & Career Architecture API')
      .setDescription(
        'Enterprise-grade NestJS RESTful API engineered with Clean Architecture, Domain-Driven Repository Pattern, and PostgreSQL via Prisma ORM.',
      )
      .setVersion('1.0.0')
      .addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name: 'Authorization',
          description: 'Enter your JWT access token (Bearer <token>)',
          in: 'header',
        },
        'bearer',
      )
      .addTag(
        'Health & Monitoring',
        'Liveness, readiness, and database probe endpoints',
      )
      .addTag(
        'Authentication',
        'Authentication, user registration, and JWT token rotation',
      )
      .addTag(
        'Users & Profile',
        'Portfolio owner profile management and user accounts',
      )
      .addTag(
        'Projects',
        'Portfolio project showcases, tech stacks, and live demos',
      )
      .addTag(
        'Technical Skills',
        'Skills inventory categorized by stack and proficiency',
      )
      .addTag(
        'Experiences & Career',
        'Work experience history and educational milestones',
      )
      .addTag(
        'Technical Articles',
        'Technical write-ups, architecture breakdowns, and blogs',
      )
      .addTag(
        'Contact & Inquiries',
        'Public visitor inquiry submissions and management',
      )
      .addTag(
        'Analytics & Telemetry',
        'Telemetry tracking, page views, and resume downloads',
      )
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('docs', app, document, {
      customSiteTitle: 'Portfolio API Docs',
      swaggerOptions: {
        persistAuthorization: true,
        docExpansion: 'none',
        filter: true,
      },
    });

    logger.log(
      `Swagger OpenAPI Documentation available at: http://localhost:${port}/docs`,
    );
  }

  await app.listen(port);
  logger.log(
    `Portfolio API Server listening on: http://localhost:${port}/${apiPrefix}`,
  );
}

void bootstrap();
