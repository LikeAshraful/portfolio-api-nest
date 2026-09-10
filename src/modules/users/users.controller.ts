import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  ApiPaginatedResponse,
  AuthenticatedUser,
  CurrentUser,
  Public,
  Roles,
} from '../../common';
import { JwtAuthGuard, RolesGuard } from '../../common/guards';
import { Role } from '../../database/generated/prisma/enums';
import {
  ChangePasswordDto,
  CreateUserDto,
  UpdateUserDto,
  UserQueryDto,
  UserResponseDto,
} from './dto';
import { UsersService } from './users.service';

@ApiTags('Users & Profile')
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Get('profile/public')
  @ApiOperation({ summary: 'Get public portfolio owner profile' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Owner profile details for portfolio website',
    type: UserResponseDto,
  })
  async getPublicProfile(): Promise<UserResponseDto> {
    const user = await this.usersService.getPublicProfile();
    return UserResponseDto.fromEntity(user);
  }

  @ApiBearerAuth()
  @Get('me')
  @ApiOperation({ summary: 'Get current authenticated user profile' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Current user profile',
    type: UserResponseDto,
  })
  async getMe(
    @CurrentUser() currentUser: AuthenticatedUser,
  ): Promise<UserResponseDto> {
    const user = await this.usersService.findById(currentUser.id);
    return UserResponseDto.fromEntity(user);
  }

  @ApiBearerAuth()
  @Patch('me')
  @ApiOperation({ summary: 'Update current authenticated user profile' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Updated profile',
    type: UserResponseDto,
  })
  async updateMe(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Body() dto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    // Prevent changing role through self-service endpoint
    const { role: _role, ...safeDto } = dto;
    const user = await this.usersService.update(currentUser.id, safeDto);
    return UserResponseDto.fromEntity(user);
  }

  @ApiBearerAuth()
  @Post('me/change-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Change current user password' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Password changed successfully',
  })
  async changePassword(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Body() dto: ChangePasswordDto,
  ): Promise<{ message: string }> {
    await this.usersService.changePassword(currentUser.id, dto);
    return { message: 'Password changed successfully' };
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Post()
  @ApiOperation({ summary: 'Create user (Admin only)' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User created successfully',
    type: UserResponseDto,
  })
  async create(@Body() dto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.usersService.create(dto);
    return UserResponseDto.fromEntity(user);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Get()
  @ApiOperation({ summary: 'List all users paginated (Admin only)' })
  @ApiPaginatedResponse(UserResponseDto)
  async findAll(@Query() query: UserQueryDto) {
    const result = await this.usersService.findAll(query);
    return {
      items: result.items.map((u) => UserResponseDto.fromEntity(u)),
      meta: result.meta,
    };
  }

  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User details',
    type: UserResponseDto,
  })
  async findById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<UserResponseDto> {
    const user = await this.usersService.findById(id);
    return UserResponseDto.fromEntity(user);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Patch(':id')
  @ApiOperation({ summary: 'Update user by ID (Admin only)' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Updated user',
    type: UserResponseDto,
  })
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    const user = await this.usersService.update(id, dto);
    return UserResponseDto.fromEntity(user);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete user by ID (Admin only)' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'User deleted successfully',
  })
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.usersService.delete(id);
  }
}
