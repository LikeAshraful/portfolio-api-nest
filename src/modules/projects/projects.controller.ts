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
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiPaginatedResponse, Public, Roles } from '../../common';
import { JwtAuthGuard, RolesGuard } from '../../common/guards';
import { Role } from '../../database/generated/prisma/enums';
import {
  CreateProjectDto,
  ProjectQueryDto,
  ProjectResponseDto,
  UpdateProjectDto,
} from './dto';
import { ProjectsService } from './projects.service';

@ApiTags('Projects')
@Controller('projects')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all published projects with filters and pagination' })
  @ApiPaginatedResponse(ProjectResponseDto)
  async findAll(@Query() query: ProjectQueryDto) {
    const result = await this.projectsService.findAll(query);
    return {
      items: result.items.map((p) => ProjectResponseDto.fromEntity(p)),
      meta: result.meta,
    };
  }

  @Public()
  @Get('featured')
  @ApiOperation({ summary: 'Get curated featured projects for portfolio showcase' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of featured projects',
    type: [ProjectResponseDto],
  })
  async findFeatured(): Promise<ProjectResponseDto[]> {
    const projects = await this.projectsService.findFeatured();
    return projects.map((p) => ProjectResponseDto.fromEntity(p));
  }

  @Public()
  @Get(':slugOrId')
  @ApiOperation({ summary: 'Get project details by slug or UUID (increments view count)' })
  @ApiParam({ name: 'slugOrId', description: 'Project slug (e.g. distributed-event-engine) or UUID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Project details',
    type: ProjectResponseDto,
  })
  async findBySlugOrId(@Param('slugOrId') slugOrId: string): Promise<ProjectResponseDto> {
    const project = await this.projectsService.findBySlugOrId(slugOrId);
    return ProjectResponseDto.fromEntity(project);
  }

  @Public()
  @Post(':id/like')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Like/upvote a project' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Updated like count',
    schema: { properties: { likesCount: { type: 'number', example: 42 } } },
  })
  async like(@Param('id', ParseUUIDPipe) id: string): Promise<{ likesCount: number }> {
    return this.projectsService.like(id);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Post()
  @ApiOperation({ summary: 'Create new project (Admin only)' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Project created successfully',
    type: ProjectResponseDto,
  })
  async create(@Body() dto: CreateProjectDto): Promise<ProjectResponseDto> {
    const project = await this.projectsService.create(dto);
    return ProjectResponseDto.fromEntity(project);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Patch(':id')
  @ApiOperation({ summary: 'Update project (Admin only)' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Project updated successfully',
    type: ProjectResponseDto,
  })
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateProjectDto,
  ): Promise<ProjectResponseDto> {
    const project = await this.projectsService.update(id, dto);
    return ProjectResponseDto.fromEntity(project);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete project (Admin only)' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Project deleted successfully' })
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.projectsService.delete(id);
  }
}
