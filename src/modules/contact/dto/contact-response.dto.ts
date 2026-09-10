import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ContactStatus } from '../../../database/generated/prisma/enums';
import { ContactMessageEntity } from '../entities/contact-message.entity';

export class ContactResponseDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ example: 'Sarah Connor' })
  name: string;

  @ApiProperty({ example: 'sarah@example.com' })
  email: string;

  @ApiProperty({ example: 'Project Collaboration Opportunity' })
  subject: string;

  @ApiProperty({ example: 'Hi Alex, we would love to discuss a distributed backend contract.' })
  message: string;

  @ApiPropertyOptional({ example: '192.168.1.1' })
  ipAddress?: string | null;

  @ApiPropertyOptional({ example: 'Mozilla/5.0...' })
  userAgent?: string | null;

  @ApiProperty({ enum: ContactStatus, example: ContactStatus.UNREAD })
  status: ContactStatus;

  @ApiPropertyOptional({ example: 'Scheduled intro call for next Tuesday.' })
  notes?: string | null;

  @ApiProperty({ example: '2026-09-09T10:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2026-09-09T10:00:00.000Z' })
  updatedAt: Date;

  static fromEntity(entity: ContactMessageEntity): ContactResponseDto {
    const dto = new ContactResponseDto();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.email = entity.email;
    dto.subject = entity.subject;
    dto.message = entity.message;
    dto.ipAddress = entity.ipAddress;
    dto.userAgent = entity.userAgent;
    dto.status = entity.status;
    dto.notes = entity.notes;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}
