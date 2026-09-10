import { PaginatedResult } from '../../../common/dto';
import { ContactStatus } from '../../../database/generated/prisma/enums';
import { ContactQueryDto } from '../dto/contact-query.dto';
import { ContactMessageEntity } from '../entities/contact-message.entity';

export const CONTACT_REPOSITORY = Symbol('CONTACT_REPOSITORY');

export interface CreateContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
  ipAddress?: string;
  userAgent?: string;
}

export interface IContactRepository {
  create(data: CreateContactData): Promise<ContactMessageEntity>;
  findById(id: string): Promise<ContactMessageEntity | null>;
  findAll(query: ContactQueryDto): Promise<PaginatedResult<ContactMessageEntity>>;
  updateStatus(id: string, status: ContactStatus, notes?: string): Promise<ContactMessageEntity>;
  delete(id: string): Promise<boolean>;
  getUnreadCount(): Promise<number>;
}
