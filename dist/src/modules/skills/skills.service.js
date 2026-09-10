"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsService = void 0;
const common_1 = require("@nestjs/common");
const skill_repository_interface_1 = require("./interfaces/skill-repository.interface");
let SkillsService = class SkillsService {
    skillRepository;
    constructor(skillRepository) {
        this.skillRepository = skillRepository;
    }
    async create(dto) {
        const existing = await this.skillRepository.findByName(dto.name);
        if (existing) {
            throw new common_1.ConflictException(`Skill with name "${dto.name}" already exists`);
        }
        return this.skillRepository.create(dto);
    }
    async findById(id) {
        const skill = await this.skillRepository.findById(id);
        if (!skill) {
            throw new common_1.NotFoundException(`Skill with ID "${id}" not found`);
        }
        return skill;
    }
    async findAll(query) {
        return this.skillRepository.findAll(query);
    }
    async findGroupedByCategory() {
        return this.skillRepository.findGroupedByCategory();
    }
    async update(id, dto) {
        await this.findById(id);
        if (dto.name) {
            const existing = await this.skillRepository.findByName(dto.name);
            if (existing && existing.id !== id) {
                throw new common_1.ConflictException(`Skill with name "${dto.name}" already exists`);
            }
        }
        return this.skillRepository.update(id, dto);
    }
    async delete(id) {
        await this.findById(id);
        await this.skillRepository.delete(id);
    }
};
exports.SkillsService = SkillsService;
exports.SkillsService = SkillsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(skill_repository_interface_1.SKILL_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], SkillsService);
//# sourceMappingURL=skills.service.js.map