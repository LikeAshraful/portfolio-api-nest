import { Request } from 'express';
import { ContactQueryDto, ContactResponseDto, CreateContactDto, UpdateContactStatusDto } from './dto';
import { ContactService } from './contact.service';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    create(dto: CreateContactDto, ip: string, req: Request): Promise<ContactResponseDto>;
    getUnreadCount(): Promise<{
        unreadCount: number;
    }>;
    findAll(query: ContactQueryDto): Promise<{
        items: ContactResponseDto[];
        meta: import("../../common").PaginationMetaDto;
    }>;
    findById(id: string): Promise<ContactResponseDto>;
    updateStatus(id: string, dto: UpdateContactStatusDto): Promise<ContactResponseDto>;
    delete(id: string): Promise<void>;
}
