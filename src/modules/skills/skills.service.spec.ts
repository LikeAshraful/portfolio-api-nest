import { ConflictException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { SkillCategory } from '../../database/generated/prisma/enums';
import { SkillEntity } from './entities/skill.entity';
import { ISkillRepository, SKILL_REPOSITORY } from './interfaces/skill-repository.interface';
import { SkillsService } from './skills.service';

describe('SkillsService', () => {
  let service: SkillsService;
  let mockSkillRepository: jest.Mocked<ISkillRepository>;

  const mockSkill = new SkillEntity({
    id: '123e4567-e89b-12d3-a456-426614174000',
    name: 'TypeScript',
    category: SkillCategory.LANGUAGES,
    proficiency: 98,
    yearsOfExperience: 7.0,
    isFeatured: true,
    sortOrder: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  beforeEach(async () => {
    mockSkillRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findByName: jest.fn(),
      findAll: jest.fn(),
      findGroupedByCategory: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SkillsService,
        {
          provide: SKILL_REPOSITORY,
          useValue: mockSkillRepository,
        },
      ],
    }).compile();

    service = module.get<SkillsService>(SkillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new skill', async () => {
      mockSkillRepository.findByName.mockResolvedValue(null);
      mockSkillRepository.create.mockResolvedValue(mockSkill);

      const result = await service.create({
        name: 'TypeScript',
        category: SkillCategory.LANGUAGES,
        proficiency: 98,
      });

      expect(mockSkillRepository.findByName).toHaveBeenCalledWith('TypeScript');
      expect(mockSkillRepository.create).toHaveBeenCalled();
      expect(result).toEqual(mockSkill);
    });

    it('should throw ConflictException if skill name already exists', async () => {
      mockSkillRepository.findByName.mockResolvedValue(mockSkill);

      await expect(
        service.create({
          name: 'TypeScript',
          category: SkillCategory.LANGUAGES,
        }),
      ).rejects.toThrow(ConflictException);
    });
  });

  describe('findGroupedByCategory', () => {
    it('should return skills grouped by category dictionary', async () => {
      const groupedData = {
        [SkillCategory.LANGUAGES]: [mockSkill],
      };
      mockSkillRepository.findGroupedByCategory.mockResolvedValue(groupedData);

      const result = await service.findGroupedByCategory();
      expect(result).toEqual(groupedData);
    });
  });
});
