import { ContactStatus } from '../../../database/generated/prisma/enums';
export declare class ContactMessageEntity {
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
    constructor(partial: Partial<ContactMessageEntity>);
}
