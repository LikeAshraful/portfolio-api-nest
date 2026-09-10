import { PrismaService } from '../../../database/prisma.service';
import { PaginatedResult } from '../../../common/dto';
import { ContactMessageEntity } from '../entities/contact-message.entity';
import { CreateContactData, IContactRepository } from '../interfaces/contact-repository.interface';
import { ContactQueryDto } from '../dto/contact-query.dto';
import { ContactStatus } from '../../../database/generated/prisma/enums';
export declare class PrismaContactRepository implements IContactRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateContactData): Promise<ContactMessageEntity>;
    findById(id: string): Promise<ContactMessageEntity | null>;
    findAll(query: ContactQueryDto): Promise<PaginatedResult<ContactMessageEntity>>;
    updateStatus(id: string, status: ContactStatus, notes?: string): Promise<ContactMessageEntity>;
    delete(id: string): Promise<boolean>;
    getUnreadCount(): Promise<number>;
}
