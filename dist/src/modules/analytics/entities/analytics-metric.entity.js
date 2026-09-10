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
exports.AnalyticsMetricEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../../database/generated/prisma/enums");
class AnalyticsMetricEntity {
    id;
    type;
    identifier;
    referrer;
    userAgent;
    createdAt;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.AnalyticsMetricEntity = AnalyticsMetricEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], AnalyticsMetricEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.MetricType, example: enums_1.MetricType.PAGE_VIEW }),
    __metadata("design:type", String)
], AnalyticsMetricEntity.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '/projects/event-engine' }),
    __metadata("design:type", Object)
], AnalyticsMetricEntity.prototype, "identifier", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://news.ycombinator.com' }),
    __metadata("design:type", Object)
], AnalyticsMetricEntity.prototype, "referrer", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Mozilla/5.0...' }),
    __metadata("design:type", Object)
], AnalyticsMetricEntity.prototype, "userAgent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-09-09T10:00:00.000Z' }),
    __metadata("design:type", Date)
], AnalyticsMetricEntity.prototype, "createdAt", void 0);
//# sourceMappingURL=analytics-metric.entity.js.map