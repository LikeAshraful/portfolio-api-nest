import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from '../../users/dto/user-response.dto';

export class AuthResponseDto {
  @ApiProperty({ description: 'JWT access token' })
  accessToken: string;

  @ApiProperty({ description: 'JWT refresh token' })
  refreshToken: string;

  @ApiProperty({ description: 'Token expiration in seconds', example: 604800 })
  expiresIn: number;

  @ApiProperty({ description: 'Authenticated user profile', type: UserResponseDto })
  user: UserResponseDto;
}
