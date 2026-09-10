"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesModule = void 0;
const common_1 = require("@nestjs/common");
const article_repository_interface_1 = require("./interfaces/article-repository.interface");
const articles_controller_1 = require("./articles.controller");
const articles_service_1 = require("./articles.service");
const prisma_article_repository_1 = require("./repositories/prisma-article.repository");
let ArticlesModule = class ArticlesModule {
};
exports.ArticlesModule = ArticlesModule;
exports.ArticlesModule = ArticlesModule = __decorate([
    (0, common_1.Module)({
        controllers: [articles_controller_1.ArticlesController],
        providers: [
            articles_service_1.ArticlesService,
            {
                provide: article_repository_interface_1.ARTICLE_REPOSITORY,
                useClass: prisma_article_repository_1.PrismaArticleRepository,
            },
        ],
        exports: [articles_service_1.ArticlesService, article_repository_interface_1.ARTICLE_REPOSITORY],
    })
], ArticlesModule);
//# sourceMappingURL=articles.module.js.map