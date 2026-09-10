import { Module } from '@nestjs/common';
import { PROJECT_REPOSITORY } from './interfaces/project-repository.interface';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { PrismaProjectRepository } from './repositories/prisma-project.repository';

@Module({
  controllers: [ProjectsController],
  providers: [
    ProjectsService,
    {
      provide: PROJECT_REPOSITORY,
      useClass: PrismaProjectRepository,
    },
  ],
  exports: [ProjectsService, PROJECT_REPOSITORY],
})
export class ProjectsModule {}
