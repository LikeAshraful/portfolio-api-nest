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
exports.TrackMetricDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../database/generated/prisma/enums");
class TrackMetricDto {
    type;
    identifier;
    referrer;
}
exports.TrackMetricDto = TrackMetricDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.MetricType, example: enums_1.MetricType.PAGE_VIEW }),
    (0, class_validator_1.IsEnum)(enums_1.MetricType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TrackMetricDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '/projects/distributed-event-engine' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TrackMetricDto.prototype, "identifier", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://github.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TrackMetricDto.prototype, "referrer", void 0);
//# sourceMappingURL=track-metric.dto.js.map