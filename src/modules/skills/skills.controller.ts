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
import { ApiPaginatedResponse, Public, Roles } from '../../common';
import { JwtAuthGuard, RolesGuard } from '../../common/guards';
import { Role } from '../../database/generated/prisma/enums';
import {
  CreateSkillDto,
  SkillQueryDto,
  SkillResponseDto,
  UpdateSkillDto,
} from './dto';
import { SkillsService } from './skills.service';

@ApiTags('Technical Skills')
@Controller('skills')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Public()
  @Get('grouped')
  @ApiOperation({ summary: 'Get skills grouped by technical category' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Skills dictionary grouped by category',
  })
  async findGroupedByCategory() {
    const grouped = await this.skillsService.findGroupedByCategory();
    const result: Record<string, SkillResponseDto[]> = {};

    for (const [category, skills] of Object.entries(grouped)) {
      result[category] = skills.map((s) => SkillResponseDto.fromEntity(s));
    }

    return result;
  }

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all skills with pagination and filters' })
  @ApiPaginatedResponse(SkillResponseDto)
  async findAll(@Query() query: SkillQueryDto) {
    const result = await this.skillsService.findAll(query);
    return {
      items: result.items.map((s) => SkillResponseDto.fromEntity(s)),
      meta: result.meta,
    };
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Get skill by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Skill details',
    type: SkillResponseDto,
  })
  async findById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<SkillResponseDto> {
    const skill = await this.skillsService.findById(id);
    return SkillResponseDto.fromEntity(skill);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Post()
  @ApiOperation({ summary: 'Create a new skill (Admin only)' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Skill created successfully',
    type: SkillResponseDto,
  })
  async create(@Body() dto: CreateSkillDto): Promise<SkillResponseDto> {
    const skill = await this.skillsService.create(dto);
    return SkillResponseDto.fromEntity(skill);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Patch(':id')
  @ApiOperation({ summary: 'Update skill by ID (Admin only)' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Skill updated successfully',
    type: SkillResponseDto,
  })
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateSkillDto,
  ): Promise<SkillResponseDto> {
    const skill = await this.skillsService.update(id, dto);
    return SkillResponseDto.fromEntity(skill);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete skill by ID (Admin only)' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Skill deleted successfully',
  })
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.skillsService.delete(id);
  }
}
