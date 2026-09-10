import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export interface ErrorResponsePayload {
    statusCode: number;
    timestamp: string;
    path: string;
    method: string;
    message: string | string[];
    error: string;
    errors?: unknown;
}
export declare class AllExceptionsFilter implements ExceptionFilter {
    private readonly logger;
    catch(exception: unknown, host: ArgumentsHost): void;
}
