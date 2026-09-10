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
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiPaginatedResponse, AuthenticatedUser, CurrentUser, Public, Roles } from '../../common';
import { JwtAuthGuard, RolesGuard } from '../../common/guards';
import { Role } from '../../database/generated/prisma/enums';
import {
  ArticleQueryDto,
  ArticleResponseDto,
  CreateArticleDto,
  UpdateArticleDto,
} from './dto';
import { ArticlesService } from './articles.service';

@ApiTags('Technical Articles')
@Controller('articles')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get published technical articles with pagination' })
  @ApiPaginatedResponse(ArticleResponseDto)
  async findAll(@Query() query: ArticleQueryDto) {
    const result = await this.articlesService.findAll(query);
    return {
      items: result.items.map((a) => ArticleResponseDto.fromEntity(a)),
      meta: result.meta,
    };
  }

  @Public()
  @Get(':slugOrId')
  @ApiOperation({ summary: 'Get article details by slug or UUID (increments view count)' })
  @ApiParam({ name: 'slugOrId', description: 'Article slug (e.g. designing-resilient-distributed-systems) or UUID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Article details',
    type: ArticleResponseDto,
  })
  async findBySlugOrId(@Param('slugOrId') slugOrId: string): Promise<ArticleResponseDto> {
    const article = await this.articlesService.findBySlugOrId(slugOrId);
    return ArticleResponseDto.fromEntity(article);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Post()
  @ApiOperation({ summary: 'Create a new article (Admin only)' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Article created successfully',
    type: ArticleResponseDto,
  })
  async create(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Body() dto: CreateArticleDto,
  ): Promise<ArticleResponseDto> {
    const article = await this.articlesService.create(dto, currentUser.id);
    return ArticleResponseDto.fromEntity(article);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Patch(':id')
  @ApiOperation({ summary: 'Update article (Admin only)' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Article updated successfully',
    type: ArticleResponseDto,
  })
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateArticleDto,
  ): Promise<ArticleResponseDto> {
    const article = await this.articlesService.update(id, dto);
    return ArticleResponseDto.fromEntity(article);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete article (Admin only)' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Article deleted successfully' })
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.articlesService.delete(id);
  }
}
