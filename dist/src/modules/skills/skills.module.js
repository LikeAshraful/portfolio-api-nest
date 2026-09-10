"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsModule = void 0;
const common_1 = require("@nestjs/common");
const skill_repository_interface_1 = require("./interfaces/skill-repository.interface");
const prisma_skill_repository_1 = require("./repositories/prisma-skill.repository");
const skills_controller_1 = require("./skills.controller");
const skills_service_1 = require("./skills.service");
let SkillsModule = class SkillsModule {
};
exports.SkillsModule = SkillsModule;
exports.SkillsModule = SkillsModule = __decorate([
    (0, common_1.Module)({
        controllers: [skills_controller_1.SkillsController],
        providers: [
            skills_service_1.SkillsService,
            {
                provide: skill_repository_interface_1.SKILL_REPOSITORY,
                useClass: prisma_skill_repository_1.PrismaSkillRepository,
            },
        ],
        exports: [skills_service_1.SkillsService, skill_repository_interface_1.SKILL_REPOSITORY],
    })
], SkillsModule);
//# sourceMappingURL=skills.module.js.map