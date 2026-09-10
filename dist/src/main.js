"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT') || 3000;
    const apiPrefix = configService.get('API_PREFIX') || 'api/v1';
    const corsOrigin = configService.get('CORS_ORIGIN') || '*';
    const swaggerEnabled = configService.get('SWAGGER_ENABLED') ?? true;
    app.setGlobalPrefix(apiPrefix);
    app.enableCors({
        origin: corsOrigin === '*' ? true : corsOrigin.split(','),
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    app.enableShutdownHooks();
    if (swaggerEnabled) {
        const swaggerConfig = new swagger_1.DocumentBuilder()
            .setTitle('Portfolio & Career Architecture API')
            .setDescription('Enterprise-grade NestJS RESTful API engineered with Clean Architecture, Domain-Driven Repository Pattern, and PostgreSQL via Prisma ORM.')
            .setVersion('1.0.0')
            .addBearerAuth({
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            name: 'Authorization',
            description: 'Enter your JWT access token (Bearer <token>)',
            in: 'header',
        }, 'bearer')
            .addTag('Health & Monitoring', 'Liveness, readiness, and database probe endpoints')
            .addTag('Authentication', 'Authentication, user registration, and JWT token rotation')
            .addTag('Users & Profile', 'Portfolio owner profile management and user accounts')
            .addTag('Projects', 'Portfolio project showcases, tech stacks, and live demos')
            .addTag('Technical Skills', 'Skills inventory categorized by stack and proficiency')
            .addTag('Experiences & Career', 'Work experience history and educational milestones')
            .addTag('Technical Articles', 'Technical write-ups, architecture breakdowns, and blogs')
            .addTag('Contact & Inquiries', 'Public visitor inquiry submissions and management')
            .addTag('Analytics & Telemetry', 'Telemetry tracking, page views, and resume downloads')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
        swagger_1.SwaggerModule.setup('docs', app, document, {
            customSiteTitle: 'Portfolio API Docs',
            swaggerOptions: {
                persistAuthorization: true,
                docExpansion: 'none',
                filter: true,
            },
        });
        logger.log(`Swagger OpenAPI Documentation available at: http://localhost:${port}/docs`);
    }
    await app.listen(port);
    logger.log(`Portfolio API Server listening on: http://localhost:${port}/${apiPrefix}`);
}
void bootstrap();
//# sourceMappingURL=main.js.map