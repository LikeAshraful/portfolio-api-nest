"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsModule = void 0;
const common_1 = require("@nestjs/common");
const project_repository_interface_1 = require("./interfaces/project-repository.interface");
const projects_controller_1 = require("./projects.controller");
const projects_service_1 = require("./projects.service");
const prisma_project_repository_1 = require("./repositories/prisma-project.repository");
let ProjectsModule = class ProjectsModule {
};
exports.ProjectsModule = ProjectsModule;
exports.ProjectsModule = ProjectsModule = __decorate([
    (0, common_1.Module)({
        controllers: [projects_controller_1.ProjectsController],
        providers: [
            projects_service_1.ProjectsService,
            {
                provide: project_repository_interface_1.PROJECT_REPOSITORY,
                useClass: prisma_project_repository_1.PrismaProjectRepository,
            },
        ],
        exports: [projects_service_1.ProjectsService, project_repository_interface_1.PROJECT_REPOSITORY],
    })
], ProjectsModule);
//# sourceMappingURL=projects.module.js.map