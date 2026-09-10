import { ContactStatus } from '../../../database/generated/prisma/enums';
import { ContactMessageEntity } from '../entities/contact-message.entity';
export declare class ContactResponseDto {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    ipAddress?: string | null;
    userAgent?: string | null;
    status: ContactStatus;
    notes?: string | null;
    createdAt: Date;
    updatedAt: Date;
    static fromEntity(entity: ContactMessageEntity): ContactResponseDto;
}
