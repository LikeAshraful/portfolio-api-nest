import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty({ example: 'CurrentSecurePassword123!' })
  @IsString()
  @IsNotEmpty()
  currentPassword: string;

  @ApiProperty({ example: 'NewStrongPassword456!', minLength: 8 })
  @IsString()
  @MinLength(8, { message: 'New password must be at least 8 characters long' })
  newPassword: string;
}
