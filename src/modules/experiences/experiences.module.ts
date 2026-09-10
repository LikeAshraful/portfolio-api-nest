import { Module } from '@nestjs/common';
import { EXPERIENCE_REPOSITORY } from './interfaces/experience-repository.interface';
import { ExperiencesController } from './experiences.controller';
import { ExperiencesService } from './experiences.service';
import { PrismaExperienceRepository } from './repositories/prisma-experience.repository';

@Module({
  controllers: [ExperiencesController],
  providers: [
    ExperiencesService,
    {
      provide: EXPERIENCE_REPOSITORY,
      useClass: PrismaExperienceRepository,
    },
  ],
  exports: [ExperiencesService, EXPERIENCE_REPOSITORY],
})
export class ExperiencesModule {}
