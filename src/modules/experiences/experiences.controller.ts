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
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiPaginatedResponse, PaginationQueryDto, Public, Roles } from '../../common';
import { JwtAuthGuard, RolesGuard } from '../../common/guards';
import { Role } from '../../database/generated/prisma/enums';
import {
  CreateEducationDto,
  CreateExperienceDto,
  EducationResponseDto,
  ExperienceResponseDto,
  UpdateEducationDto,
  UpdateExperienceDto,
} from './dto';
import { ExperiencesService } from './experiences.service';

@ApiTags('Experiences & Career')
@Controller('experiences')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ExperiencesController {
  constructor(private readonly experiencesService: ExperiencesService) {}

  // Work Experiences
  @Public()
  @Get()
  @ApiOperation({ summary: 'Get professional work experience history' })
  @ApiPaginatedResponse(ExperienceResponseDto)
  async findAllExperiences(@Query() query: PaginationQueryDto) {
    const result = await this.experiencesService.findAllExperiences(query);
    return {
      items: result.items.map((e) => ExperienceResponseDto.fromEntity(e)),
      meta: result.meta,
    };
  }

  @Public()
  @Get('education')
  @ApiOperation({ summary: 'Get academic background and degrees' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of education history',
    type: [EducationResponseDto],
  })
  async findAllEducations(): Promise<EducationResponseDto[]> {
    const educations = await this.experiencesService.findAllEducations();
    return educations.map((e) => EducationResponseDto.fromEntity(e));
  }

  @Public()
  @Get('education/:id')
  @ApiOperation({ summary: 'Get education milestone by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Education details',
    type: EducationResponseDto,
  })
  async findEducationById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<EducationResponseDto> {
    const education = await this.experiencesService.findEducationById(id);
    return EducationResponseDto.fromEntity(education);
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Get work experience by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Experience details',
    type: ExperienceResponseDto,
  })
  async findExperienceById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ExperienceResponseDto> {
    const experience = await this.experiencesService.findExperienceById(id);
    return ExperienceResponseDto.fromEntity(experience);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Post()
  @ApiOperation({ summary: 'Add new work experience (Admin only)' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Work experience created successfully',
    type: ExperienceResponseDto,
  })
  async createExperience(@Body() dto: CreateExperienceDto): Promise<ExperienceResponseDto> {
    const experience = await this.experiencesService.createExperience(dto);
    return ExperienceResponseDto.fromEntity(experience);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Patch(':id')
  @ApiOperation({ summary: 'Update work experience (Admin only)' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Work experience updated successfully',
    type: ExperienceResponseDto,
  })
  async updateExperience(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateExperienceDto,
  ): Promise<ExperienceResponseDto> {
    const experience = await this.experiencesService.updateExperience(id, dto);
    return ExperienceResponseDto.fromEntity(experience);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete work experience (Admin only)' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Experience deleted successfully' })
  async deleteExperience(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.experiencesService.deleteExperience(id);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Post('education')
  @ApiOperation({ summary: 'Add education record (Admin only)' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Education record created successfully',
    type: EducationResponseDto,
  })
  async createEducation(@Body() dto: CreateEducationDto): Promise<EducationResponseDto> {
    const education = await this.experiencesService.createEducation(dto);
    return EducationResponseDto.fromEntity(education);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Patch('education/:id')
  @ApiOperation({ summary: 'Update education record (Admin only)' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Education updated successfully',
    type: EducationResponseDto,
  })
  async updateEducation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateEducationDto,
  ): Promise<EducationResponseDto> {
    const education = await this.experiencesService.updateEducation(id, dto);
    return EducationResponseDto.fromEntity(education);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Delete('education/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete education record (Admin only)' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Education deleted successfully' })
  async deleteEducation(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.experiencesService.deleteEducation(id);
  }
}
