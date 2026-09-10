import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticatedUser, CurrentUser, Public } from '../../common';
import { JwtAuthGuard } from '../../common/guards';
import { UserResponseDto } from '../users/dto';
import { AuthService } from './auth.service';
import { AuthResponseDto, LoginDto, RefreshTokenDto, RegisterDto } from './dto';

@ApiTags('Authentication')
@Controller('auth')
@UseGuards(JwtAuthGuard)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Log in with email and password' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Authentication successful, returns tokens and user info',
    type: AuthResponseDto,
  })
  async login(@Body() dto: LoginDto): Promise<AuthResponseDto> {
    return this.authService.login(dto);
  }

  @Public()
  @Post('register')
  @ApiOperation({ summary: 'Register a new user account' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User registered successfully',
    type: AuthResponseDto,
  })
  async register(@Body() dto: RegisterDto): Promise<AuthResponseDto> {
    return this.authService.register(dto);
  }

  @Public()
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Rotate and refresh JWT access token' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Token refreshed successfully',
    type: AuthResponseDto,
  })
  async refresh(@Body() dto: RefreshTokenDto): Promise<AuthResponseDto> {
    return this.authService.refreshToken(dto.refreshToken);
  }

  @ApiBearerAuth()
  @Get('me')
  @ApiOperation({ summary: 'Get current authenticated user info' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Current user session data',
    type: UserResponseDto,
  })
  async getMe(@CurrentUser() currentUser: AuthenticatedUser): Promise<AuthenticatedUser> {
    return currentUser;
  }
}
