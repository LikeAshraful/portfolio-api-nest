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
exports.AnalyticsOverviewDto = exports.DailyViewCountDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class DailyViewCountDto {
    date;
    count;
}
exports.DailyViewCountDto = DailyViewCountDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-09-08' }),
    __metadata("design:type", String)
], DailyViewCountDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 145 }),
    __metadata("design:type", Number)
], DailyViewCountDto.prototype, "count", void 0);
class AnalyticsOverviewDto {
    totalPageViews;
    totalResumeDownloads;
    totalProjects;
    totalArticles;
    totalInquiries;
    recentViewsLast7Days;
}
exports.AnalyticsOverviewDto = AnalyticsOverviewDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4520 }),
    __metadata("design:type", Number)
], AnalyticsOverviewDto.prototype, "totalPageViews", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 215 }),
    __metadata("design:type", Number)
], AnalyticsOverviewDto.prototype, "totalResumeDownloads", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12 }),
    __metadata("design:type", Number)
], AnalyticsOverviewDto.prototype, "totalProjects", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 8 }),
    __metadata("design:type", Number)
], AnalyticsOverviewDto.prototype, "totalArticles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 34 }),
    __metadata("design:type", Number)
], AnalyticsOverviewDto.prototype, "totalInquiries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [DailyViewCountDto] }),
    __metadata("design:type", Array)
], AnalyticsOverviewDto.prototype, "recentViewsLast7Days", void 0);
//# sourceMappingURL=analytics-overview.dto.js.map