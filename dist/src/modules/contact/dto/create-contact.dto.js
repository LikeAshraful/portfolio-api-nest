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
exports.CreateContactDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateContactDto {
    name;
    email;
    subject;
    message;
}
exports.CreateContactDto = CreateContactDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Sarah Connor', description: 'Sender full name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateContactDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'sarah@example.com', description: 'Sender email address' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email address' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateContactDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Project Collaboration Opportunity', description: 'Subject of inquiry' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateContactDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Hi Alex, we would love to discuss a distributed backend contract opportunity.',
        minLength: 10,
        maxLength: 3000,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(10, { message: 'Message must be at least 10 characters long' }),
    (0, class_validator_1.MaxLength)(3000, { message: 'Message cannot exceed 3000 characters' }),
    __metadata("design:type", String)
], CreateContactDto.prototype, "message", void 0);
//# sourceMappingURL=create-contact.dto.js.map