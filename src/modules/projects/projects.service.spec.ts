import { ConflictException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ProjectCategory, ProjectStatus } from '../../database/generated/prisma/enums';
import { ProjectEntity } from './entities/project.entity';
import { IProjectRepository, PROJECT_REPOSITORY } from './interfaces/project-repository.interface';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let mockProjectRepository: jest.Mocked<IProjectRepository>;

  const mockProject = new ProjectEntity({
    id: '123e4567-e89b-12d3-a456-426614174000',
    title: 'Distributed Event Engine',
    slug: 'distributed-event-engine',
    summary: 'High-performance streaming engine',
    description: 'Detailed description',
    featured: true,
    status: ProjectStatus.PUBLISHED,
    category: ProjectCategory.BACKEND,
    sortOrder: 1,
    viewsCount: 100,
    likesCount: 10,
    technologies: [
      {
        skillId: 'skill-uuid-1',
        name: 'NestJS',
        iconUrl: null,
        isPrimary: true,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  beforeEach(async () => {
    mockProjectRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findBySlug: jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      findFeatured: jest.fn(),
      incrementViews: jest.fn(),
      incrementLikes: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectsService,
        {
          provide: PROJECT_REPOSITORY,
          useValue: mockProjectRepository,
        },
      ],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should generate a slug and create the project', async () => {
      mockProjectRepository.findBySlug.mockResolvedValue(null);
      mockProjectRepository.create.mockResolvedValue(mockProject);

      const result = await service.create({
        title: 'Distributed Event Engine',
        summary: 'High-performance streaming engine',
        description: 'Detailed description',
      });

      expect(mockProjectRepository.findBySlug).toHaveBeenCalledWith('distributed-event-engine');
      expect(mockProjectRepository.create).toHaveBeenCalled();
      expect(result).toEqual(mockProject);
    });

    it('should throw ConflictException if slug already exists', async () => {
      mockProjectRepository.findBySlug.mockResolvedValue(mockProject);

      await expect(
        service.create({
          title: 'Distributed Event Engine',
          summary: 'High-performance streaming engine',
          description: 'Detailed description',
        }),
      ).rejects.toThrow(ConflictException);
    });
  });

  describe('findBySlugOrId', () => {
    it('should find by UUID and trigger view increment', async () => {
      mockProjectRepository.findById.mockResolvedValue(mockProject);
      mockProjectRepository.incrementViews.mockResolvedValue();

      const result = await service.findBySlugOrId(mockProject.id);

      expect(mockProjectRepository.findById).toHaveBeenCalledWith(mockProject.id);
      expect(result).toEqual(mockProject);
    });

    it('should find by slug and trigger view increment', async () => {
      mockProjectRepository.findBySlug.mockResolvedValue(mockProject);
      mockProjectRepository.incrementViews.mockResolvedValue();

      const result = await service.findBySlugOrId('distributed-event-engine');

      expect(mockProjectRepository.findBySlug).toHaveBeenCalledWith('distributed-event-engine');
      expect(result).toEqual(mockProject);
    });

    it('should throw NotFoundException if project is missing', async () => {
      mockProjectRepository.findBySlug.mockResolvedValue(null);

      await expect(service.findBySlugOrId('non-existent-slug')).rejects.toThrow(NotFoundException);
    });
  });

  describe('like', () => {
    it('should increment likes count for project', async () => {
      mockProjectRepository.findById.mockResolvedValue(mockProject);
      mockProjectRepository.incrementLikes.mockResolvedValue(11);

      const result = await service.like(mockProject.id);

      expect(mockProjectRepository.incrementLikes).toHaveBeenCalledWith(mockProject.id);
      expect(result).toEqual({ likesCount: 11 });
    });
  });
});
