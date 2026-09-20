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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const portfolio_data_1 = require("./data/portfolio.data");
let AiService = class AiService {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    async chat(message) {
        const apiKey = this.configService.get('OPENROUTER_API_KEY') ||
            process.env.OPENROUTER_API_KEY;
        const baseUrl = this.configService.get('OPENROUTER_BASE_URL') ||
            process.env.OPENROUTER_BASE_URL ||
            'https://openrouter.ai/api/v1';
        const model = this.configService.get('OPENROUTER_MODEL') ||
            process.env.OPENROUTER_MODEL ||
            'nex-agi/nex-n2.5-pro:free';
        if (!apiKey) {
            throw new common_1.InternalServerErrorException('OPENROUTER_API_KEY is not configured in the environment');
        }
        const systemPrompt = `
You are the AI assistant for Ashraful Islam's professional portfolio.

Your responsibility is to answer questions about Ashraful's:

- professional experience
- technical skills
- projects
- technologies
- backend development experience
- frontend experience
- DevOps knowledge

You MUST only use the portfolio information given below.

If the requested information does not exist, say:

"I don't have that information in Ashraful's portfolio."

Do not invent:
- companies
- experience
- technologies
- certifications
- projects
- job titles

Keep responses concise, professional and easy to understand.

PORTFOLIO INFORMATION:

${portfolio_data_1.PORTFOLIO_DATA}
`;
        try {
            const response = await fetch(`${baseUrl}/chat/completions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model,
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: message },
                    ],
                    temperature: 0.3,
                }),
            });
            if (!response.ok) {
                throw new Error(`OpenAI API request failed with status ${response.status}`);
            }
            const data = await response.json();
            return {
                answer: data.choices?.[0].message?.content ??
                    "I don't have that information in Ashraful's portfolio.",
            };
        }
        catch (error) {
            console.error('Error fetching AI response:', error);
            throw new common_1.InternalServerErrorException('Failed to get AI response');
        }
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AiService);
//# sourceMappingURL=ai.service.js.map