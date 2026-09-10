import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponseDto } from '../dto/api-response.dto';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, ApiResponseDto<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponseDto<T>> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response>();
    const statusCode = response.statusCode || 200;

    return next.handle().pipe(
      map((data) => {
        // If the controller already returned an ApiResponseDto instance, return directly
        if (data && typeof data === 'object' && 'success' in data && 'statusCode' in data) {
          return data;
        }

        return new ApiResponseDto(data, statusCode);
      }),
    );
  }
}
