import { Module } from '@nestjs/common';
import { SKILL_REPOSITORY } from './interfaces/skill-repository.interface';
import { PrismaSkillRepository } from './repositories/prisma-skill.repository';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';

@Module({
  controllers: [SkillsController],
  providers: [
    SkillsService,
    {
      provide: SKILL_REPOSITORY,
      useClass: PrismaSkillRepository,
    },
  ],
  exports: [SkillsService, SKILL_REPOSITORY],
})
export class SkillsModule {}
