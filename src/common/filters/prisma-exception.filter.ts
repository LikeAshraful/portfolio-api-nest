import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Prisma } from '../../database/generated/prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError, Prisma.PrismaClientValidationError)
export class PrismaExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(PrismaExceptionFilter.name);

  catch(
    exception: Prisma.PrismaClientKnownRequestError | Prisma.PrismaClientValidationError,
    host: ArgumentsHost,
  ): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Database operation failed';
    let error = 'DatabaseError';

    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      switch (exception.code) {
        case 'P2002': {
          status = HttpStatus.CONFLICT;
          const target = (exception.meta?.target as string[])?.join(', ') || 'field';
          message = `Unique constraint failed on field(s): ${target}`;
          error = 'Conflict';
          break;
        }
        case 'P2025': {
          status = HttpStatus.NOT_FOUND;
          message = (exception.meta?.cause as string) || 'Record not found';
          error = 'Not Found';
          break;
        }
        case 'P2003': {
          status = HttpStatus.BAD_REQUEST;
          const field = (exception.meta?.field_name as string) || 'foreign key';
          message = `Foreign key constraint failed on field: ${field}`;
          error = 'Bad Request';
          break;
        }
        case 'P2014': {
          status = HttpStatus.BAD_REQUEST;
          message = 'The change you are trying to make violates a relation constraint.';
          error = 'Bad Request';
          break;
        }
        default:
          status = HttpStatus.BAD_REQUEST;
          message = `Database query error (Code: ${exception.code})`;
          error = 'DatabaseError';
          break;
      }
    } else if (exception instanceof Prisma.PrismaClientValidationError) {
      status = HttpStatus.BAD_REQUEST;
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
}
