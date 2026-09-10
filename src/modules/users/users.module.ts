import { Module } from '@nestjs/common';
import { USER_REPOSITORY } from './interfaces/user-repository.interface';
import { PrismaUserRepository } from './repositories/prisma-user.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UsersService, USER_REPOSITORY],
})
export class UsersModule {}
