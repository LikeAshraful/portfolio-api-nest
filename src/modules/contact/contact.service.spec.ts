import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ContactStatus } from '../../database/generated/prisma/enums';
import { ContactMessageEntity } from './entities/contact-message.entity';
import { CONTACT_REPOSITORY, IContactRepository } from './interfaces/contact-repository.interface';
import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;
  let mockContactRepository: jest.Mocked<IContactRepository>;

  const mockMessage = new ContactMessageEntity({
    id: '123e4567-e89b-12d3-a456-426614174000',
    name: 'Sarah Connor',
    email: 'sarah@example.com',
    subject: 'Consulting Contract',
    message: 'Hello Alex, we have a project proposal.',
    status: ContactStatus.UNREAD,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  beforeEach(async () => {
    mockContactRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findAll: jest.fn(),
      updateStatus: jest.fn(),
      delete: jest.fn(),
      getUnreadCount: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactService,
        {
          provide: CONTACT_REPOSITORY,
          useValue: mockContactRepository,
        },
      ],
    }).compile();

    service = module.get<ContactService>(ContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create an inquiry with telemetry', async () => {
      mockContactRepository.create.mockResolvedValue(mockMessage);

      const result = await service.create(
        {
          name: 'Sarah Connor',
          email: 'sarah@example.com',
          subject: 'Consulting Contract',
          message: 'Hello Alex, we have a project proposal.',
        },
        '192.168.1.1',
        'Mozilla/5.0',
      );

      expect(mockContactRepository.create).toHaveBeenCalledWith(
        expect.objectContaining({
          email: 'sarah@example.com',
          ipAddress: '192.168.1.1',
        }),
      );
      expect(result).toEqual(mockMessage);
    });
  });

  describe('updateStatus', () => {
    it('should update inquiry status', async () => {
      const updated = new ContactMessageEntity({
        ...mockMessage,
        status: ContactStatus.READ,
      });

      mockContactRepository.findById.mockResolvedValue(mockMessage);
      mockContactRepository.updateStatus.mockResolvedValue(updated);

      const result = await service.updateStatus(mockMessage.id, {
        status: ContactStatus.READ,
        notes: 'Read on morning check',
      });

      expect(mockContactRepository.updateStatus).toHaveBeenCalledWith(
        mockMessage.id,
        ContactStatus.READ,
        'Read on morning check',
      );
      expect(result.status).toBe(ContactStatus.READ);
    });

    it('should throw NotFoundException if message does not exist', async () => {
      mockContactRepository.findById.mockResolvedValue(null);

      await expect(
        service.updateStatus('non-existent-id', { status: ContactStatus.READ }),
      ).rejects.toThrow(NotFoundException);
    });
  });
});
