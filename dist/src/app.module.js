"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const common_2 = require("./common");
const config_2 = require("./config");
const database_module_1 = require("./database/database.module");
const analytics_module_1 = require("./modules/analytics/analytics.module");
const articles_module_1 = require("./modules/articles/articles.module");
const auth_module_1 = require("./modules/auth/auth.module");
const contact_module_1 = require("./modules/contact/contact.module");
const experiences_module_1 = require("./modules/experiences/experiences.module");
const health_module_1 = require("./modules/health/health.module");
const projects_module_1 = require("./modules/projects/projects.module");
const skills_module_1 = require("./modules/skills/skills.module");
const users_module_1 = require("./modules/users/users.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validate: config_2.validateEnv,
                load: [config_2.appConfig],
            }),
            throttler_1.ThrottlerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => [
                    {
                        ttl: config.get('THROTTLE_TTL') || 60000,
                        limit: config.get('THROTTLE_LIMIT') || 100,
                    },
                ],
            }),
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            projects_module_1.ProjectsModule,
            skills_module_1.SkillsModule,
            experiences_module_1.ExperiencesModule,
            articles_module_1.ArticlesModule,
            contact_module_1.ContactModule,
            analytics_module_1.AnalyticsModule,
            health_module_1.HealthModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: common_2.TransformInterceptor,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: common_2.LoggingInterceptor,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: common_2.AllExceptionsFilter,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: common_2.PrismaExceptionFilter,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map