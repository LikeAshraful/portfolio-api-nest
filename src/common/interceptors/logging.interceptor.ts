import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();

    const { method, originalUrl, ip } = req;
    const userAgent = req.get('user-agent') || 'Unknown';
    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        const { statusCode } = res;
        const duration = Date.now() - now;
        this.logger.log(
          `[${method}] ${originalUrl} ${statusCode} - ${duration}ms [${ip}] (${userAgent})`,
        );
      }),
    );
  }
}
