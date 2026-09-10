import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

export interface ErrorResponsePayload {
  statusCode: number;
  timestamp: string;
  path: string;
  method: string;
  message: string | string[];
  error: string;
  errors?: unknown;
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string | string[] = 'Internal server error';
    let error = 'Internal Server Error';
    let errors: unknown = undefined;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();

      if (typeof res === 'string') {
        message = res;
        error = exception.name;
      } else if (typeof res === 'object' && res !== null) {
        const resObj = res as Record<string, unknown>;
        message = (resObj['message'] as string | string[]) || exception.message;
        error = (resObj['error'] as string) || exception.name;
        errors = resObj['errors'];
      }
    } else if (exception instanceof Error) {
      message = exception.message;
      error = exception.name;
    }

    const payload: ErrorResponsePayload = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message,
      error,
      ...(errors ? { errors } : {}),
    };

    if (status >= HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(
        `[${request.method}] ${request.url} - Status: ${status} - Error: ${
          exception instanceof Error ? exception.stack : JSON.stringify(exception)
        }`,
      );
    } else {
      this.logger.warn(
        `[${request.method}] ${request.url} - Status: ${status} - Message: ${JSON.stringify(message)}`,
      );
    }

    response.status(status).json(payload);
  }
}
