"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PrismaExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../database/generated/prisma/client");
let PrismaExceptionFilter = PrismaExceptionFilter_1 = class PrismaExceptionFilter {
    logger = new common_1.Logger(PrismaExceptionFilter_1.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Database operation failed';
        let error = 'DatabaseError';
        if (exception instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            switch (exception.code) {
                case 'P2002': {
                    status = common_1.HttpStatus.CONFLICT;
                    const target = exception.meta?.target?.join(', ') || 'field';
                    message = `Unique constraint failed on field(s): ${target}`;
                    error = 'Conflict';
                    break;
                }
                case 'P2025': {
                    status = common_1.HttpStatus.NOT_FOUND;
                    message = exception.meta?.cause || 'Record not found';
                    error = 'Not Found';
                    break;
                }
                case 'P2003': {
                    status = common_1.HttpStatus.BAD_REQUEST;
                    const field = exception.meta?.field_name || 'foreign key';
                    message = `Foreign key constraint failed on field: ${field}`;
                    error = 'Bad Request';
                    break;
                }
                case 'P2014': {
                    status = common_1.HttpStatus.BAD_REQUEST;
                    message = 'The change you are trying to make violates a relation constraint.';
                    error = 'Bad Request';
                    break;
                }
                default:
                    status = common_1.HttpStatus.BAD_REQUEST;
                    message = `Database query error (Code: ${exception.code})`;
                    error = 'DatabaseError';
                    break;
            }
        }
        else if (exception instanceof client_1.Prisma.PrismaClientValidationError) {
            status = common_1.HttpStatus.BAD_REQUEST;
            message = 'Database validation error: Invalid input data supplied.';
            error = 'Bad Request';
        }
        this.logger.warn(`Prisma Error on [${request.method}] ${request.url}: ${message}`);
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
            message,
            error,
        });
    }
};
exports.PrismaExceptionFilter = PrismaExceptionFilter;
exports.PrismaExceptionFilter = PrismaExceptionFilter = PrismaExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError, client_1.Prisma.PrismaClientValidationError)
], PrismaExceptionFilter);
//# sourceMappingURL=prisma-exception.filter.js.map