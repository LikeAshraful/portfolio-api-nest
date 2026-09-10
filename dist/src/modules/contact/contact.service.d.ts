import { PaginatedResult } from '../../common/dto';
import { ContactQueryDto, CreateContactDto, UpdateContactStatusDto } from './dto';
import { ContactMessageEntity } from './entities/contact-message.entity';
import { IContactRepository } from './interfaces/contact-repository.interface';
export declare class ContactService {
    private readonly contactRepository;
    constructor(contactRepository: IContactRepository);
    create(dto: CreateContactDto, ipAddress?: string, userAgent?: string): Promise<ContactMessageEntity>;
    findById(id: string): Promise<ContactMessageEntity>;
    findAll(query: ContactQueryDto): Promise<PaginatedResult<ContactMessageEntity>>;
    updateStatus(id: string, dto: UpdateContactStatusDto): Promise<ContactMessageEntity>;
    delete(id: string): Promise<void>;
    getUnreadCount(): Promise<{
        unreadCount: number;
    }>;
}
