import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Ip,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { ApiPaginatedResponse, Public, Roles } from '../../common';
import { JwtAuthGuard, RolesGuard } from '../../common/guards';
import { Role } from '../../database/generated/prisma/enums';
import {
  ContactQueryDto,
  ContactResponseDto,
  CreateContactDto,
  UpdateContactStatusDto,
} from './dto';
import { ContactService } from './contact.service';

@ApiTags('Contact & Inquiries')
@Controller('contact')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Public()
  @Post()
  @ApiOperation({ summary: 'Submit a new contact inquiry or message' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Message sent successfully',
    type: ContactResponseDto,
  })
  async create(
    @Body() dto: CreateContactDto,
    @Ip() ip: string,
    @Req() req: Request,
  ): Promise<ContactResponseDto> {
    const userAgent = req.get('user-agent');
    const contact = await this.contactService.create(dto, ip, userAgent);
    return ContactResponseDto.fromEntity(contact);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Get('unread-count')
  @ApiOperation({ summary: 'Get total count of unread inquiries (Admin only)' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Count of unread messages',
    schema: { properties: { unreadCount: { type: 'number', example: 3 } } },
  })
  async getUnreadCount(): Promise<{ unreadCount: number }> {
    return this.contactService.getUnreadCount();
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Get()
  @ApiOperation({ summary: 'Get all inquiries with filters and pagination (Admin only)' })
  @ApiPaginatedResponse(ContactResponseDto)
  async findAll(@Query() query: ContactQueryDto) {
    const result = await this.contactService.findAll(query);
    return {
      items: result.items.map((c) => ContactResponseDto.fromEntity(c)),
      meta: result.meta,
    };
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Get(':id')
  @ApiOperation({ summary: 'Get inquiry details by ID (Admin only)' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Inquiry details',
    type: ContactResponseDto,
  })
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<ContactResponseDto> {
    const contact = await this.contactService.findById(id);
    return ContactResponseDto.fromEntity(contact);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Patch(':id/status')
  @ApiOperation({ summary: 'Update inquiry status and notes (Admin only)' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Updated inquiry',
    type: ContactResponseDto,
  })
  async updateStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateContactStatusDto,
  ): Promise<ContactResponseDto> {
    const contact = await this.contactService.updateStatus(id, dto);
    return ContactResponseDto.fromEntity(contact);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete inquiry by ID (Admin only)' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Inquiry deleted successfully' })
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.contactService.delete(id);
  }
}
