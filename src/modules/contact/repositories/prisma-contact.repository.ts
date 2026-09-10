import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { PaginatedResult } from '../../../common/dto';
import { ContactMessageEntity } from '../entities/contact-message.entity';
import {
  CreateContactData,
  IContactRepository,
} from '../interfaces/contact-repository.interface';
import { ContactQueryDto } from '../dto/contact-query.dto';
import { Prisma } from '../../../database/generated/prisma/client';
import { ContactStatus } from '../../../database/generated/prisma/enums';

@Injectable()
export class PrismaContactRepository implements IContactRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateContactData): Promise<ContactMessageEntity> {
    const contact = await this.prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        ipAddress: data.ipAddress,
        userAgent: data.userAgent,
        status: ContactStatus.UNREAD,
      },
    });

    return new ContactMessageEntity(contact);
  }

  async findById(id: string): Promise<ContactMessageEntity | null> {
    const contact = await this.prisma.contactMessage.findUnique({
      where: { id },
    });

    return contact ? new ContactMessageEntity(contact) : null;
  }

  async findAll(query: ContactQueryDto): Promise<PaginatedResult<ContactMessageEntity>> {
    const where: Prisma.ContactMessageWhereInput = {};

    if (query.status) {
      where.status = query.status;
    }

    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: 'insensitive' } },
        { email: { contains: query.search, mode: 'insensitive' } },
        { subject: { contains: query.search, mode: 'insensitive' } },
        { message: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const orderBy: Prisma.ContactMessageOrderByWithRelationInput = {
      [query.sortBy || 'createdAt']: query.sortOrder || 'desc',
    };

    const [total, contacts] = await Promise.all([
      this.prisma.contactMessage.count({ where }),
      this.prisma.contactMessage.findMany({
        where,
        skip: query.skip,
        take: query.limit,
        orderBy,
      }),
    ]);

    const entities = contacts.map((c) => new ContactMessageEntity(c));
    return new PaginatedResult(entities, total, query.page, query.limit);
  }

  async updateStatus(
    id: string,
    status: ContactStatus,
    notes?: string,
  ): Promise<ContactMessageEntity> {
    const contact = await this.prisma.contactMessage.update({
      where: { id },
      data: {
        status,
        ...(notes !== undefined ? { notes } : {}),
      },
    });

    return new ContactMessageEntity(contact);
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.contactMessage.delete({
      where: { id },
    });
    return true;
  }

  async getUnreadCount(): Promise<number> {
    return this.prisma.contactMessage.count({
      where: { status: ContactStatus.UNREAD },
    });
  }
}
