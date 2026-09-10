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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("../../common");
const guards_1 = require("../../common/guards");
const enums_1 = require("../../database/generated/prisma/enums");
const dto_1 = require("./dto");
const analytics_service_1 = require("./analytics.service");
const analytics_metric_entity_1 = require("./entities/analytics-metric.entity");
let AnalyticsController = class AnalyticsController {
    analyticsService;
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    async track(dto, req) {
        const userAgent = req.get('user-agent');
        return this.analyticsService.track(dto, userAgent);
    }
    async getOverview() {
        return this.analyticsService.getOverview();
    }
    async findAll(query) {
        return this.analyticsService.findAll(query);
    }
};
exports.AnalyticsController = AnalyticsController;
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Post)('track'),
    (0, swagger_1.ApiOperation)({ summary: 'Track visitor interaction event (page view, resume download, project click)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Metric recorded successfully',
        type: analytics_metric_entity_1.AnalyticsMetricEntity,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.TrackMetricDto, Object]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "track", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Get)('overview'),
    (0, swagger_1.ApiOperation)({ summary: 'Get overall portfolio analytics dashboard overview (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Analytics summary metrics',
        type: dto_1.AnalyticsOverviewDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getOverview", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Get)('metrics'),
    (0, swagger_1.ApiOperation)({ summary: 'Get raw telemetry logs paginated (Admin only)' }),
    (0, common_2.ApiPaginatedResponse)(analytics_metric_entity_1.AnalyticsMetricEntity),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.MetricQueryDto]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "findAll", null);
exports.AnalyticsController = AnalyticsController = __decorate([
    (0, swagger_1.ApiTags)('Analytics & Telemetry'),
    (0, common_1.Controller)('analytics'),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
], AnalyticsController);
//# sourceMappingURL=analytics.controller.js.map