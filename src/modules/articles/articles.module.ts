import { Module } from '@nestjs/common';
import { ARTICLE_REPOSITORY } from './interfaces/article-repository.interface';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { PrismaArticleRepository } from './repositories/prisma-article.repository';

@Module({
  controllers: [ArticlesController],
  providers: [
    ArticlesService,
    {
      provide: ARTICLE_REPOSITORY,
      useClass: PrismaArticleRepository,
    },
  ],
  exports: [ArticlesService, ARTICLE_REPOSITORY],
})
export class ArticlesModule {}
