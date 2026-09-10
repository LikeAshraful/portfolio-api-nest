import {
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PaginatedResult } from '../../common/dto';
import { ContactStatus } from '../../database/generated/prisma/enums';
import {
  ContactQueryDto,
  CreateContactDto,
  UpdateContactStatusDto,
} from './dto';
import { ContactMessageEntity } from './entities/contact-message.entity';
import {
  CONTACT_REPOSITORY,
  IContactRepository,
} from './interfaces/contact-repository.interface';

@Injectable()
export class ContactService {
  constructor(
    @Inject(CONTACT_REPOSITORY)
    private readonly contactRepository: IContactRepository,
  ) {}

  async create(
    dto: CreateContactDto,
    ipAddress?: string,
    userAgent?: string,
  ): Promise<ContactMessageEntity> {
    return this.contactRepository.create({
      name: dto.name,
      email: dto.email,
      subject: dto.subject,
      message: dto.message,
      ipAddress,
      userAgent,
    });
  }

  async findById(id: string): Promise<ContactMessageEntity> {
    const contact = await this.contactRepository.findById(id);
    if (!contact) {
      throw new NotFoundException(`Contact message with ID "${id}" not found`);
    }
    return contact;
  }

  async findAll(query: ContactQueryDto): Promise<PaginatedResult<ContactMessageEntity>> {
    return this.contactRepository.findAll(query);
  }

  async updateStatus(id: string, dto: UpdateContactStatusDto): Promise<ContactMessageEntity> {
    await this.findById(id);
    return this.contactRepository.updateStatus(id, dto.status, dto.notes);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.contactRepository.delete(id);
  }

  async getUnreadCount(): Promise<{ unreadCount: number }> {
    const unreadCount = await this.contactRepository.getUnreadCount();
    return { unreadCount };
  }
}
