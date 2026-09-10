import { Module } from '@nestjs/common';
import { CONTACT_REPOSITORY } from './interfaces/contact-repository.interface';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { PrismaContactRepository } from './repositories/prisma-contact.repository';

@Module({
  controllers: [ContactController],
  providers: [
    ContactService,
    {
      provide: CONTACT_REPOSITORY,
      useClass: PrismaContactRepository,
    },
  ],
  exports: [ContactService, CONTACT_REPOSITORY],
})
export class ContactModule {}
