export declare class ApiResponseDto<T> {
    success: boolean;
    statusCode: number;
    message?: string;
    data: T;
    timestamp: string;
    constructor(data: T, statusCode?: number, message?: string);
}
