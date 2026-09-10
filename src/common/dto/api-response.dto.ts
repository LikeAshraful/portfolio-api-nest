import { ApiProperty } from '@nestjs/swagger';

export class ApiResponseDto<T> {
  @ApiProperty({ description: 'Indicates if the operation was successful', example: true })
  success: boolean;

  @ApiProperty({ description: 'HTTP Status Code', example: 200 })
  statusCode: number;

  @ApiProperty({ description: 'Optional human-readable message', example: 'Operation completed successfully' })
  message?: string;

  @ApiProperty({ description: 'Payload response data' })
  data: T;

  @ApiProperty({ description: 'ISO 8601 Timestamp of response', example: '2026-09-09T10:00:00.000Z' })
  timestamp: string;

  constructor(data: T, statusCode = 200, message?: string) {
    this.success = statusCode >= 200 && statusCode < 300;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.timestamp = new Date().toISOString();
  }
}
