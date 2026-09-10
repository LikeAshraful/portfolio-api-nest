import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiResponseDto } from '../dto/api-response.dto';
export declare class TransformInterceptor<T> implements NestInterceptor<T, ApiResponseDto<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponseDto<T>>;
}
