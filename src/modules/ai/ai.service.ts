import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PORTFOLIO_DATA } from './data/portfolio.data';

@Injectable()
export class AiService {
  constructor(private readonly configService: ConfigService) {}

  async chat(message: string): Promise<{ answer: string }> {
    const apiKey =
      this.configService.get<string>('OPENROUTER_API_KEY') ||
      process.env.OPENROUTER_API_KEY;

    const baseUrl =
      this.configService.get<string>('OPENROUTER_BASE_URL') ||
      process.env.OPENROUTER_BASE_URL ||
      'https://openrouter.ai/api/v1';

    const model =
      this.configService.get<string>('OPENROUTER_MODEL') ||
      process.env.OPENROUTER_MODEL ||
      'nex-agi/nex-n2.5-pro:free';

    if (!apiKey) {
      throw new InternalServerErrorException(
        'OPENROUTER_API_KEY is not configured in the environment',
      );
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

${PORTFOLIO_DATA}
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
        throw new Error(
          `OpenAI API request failed with status ${response.status}`,
        );
      }

      const data = await response.json();

      return {
        answer:
          data.choices?.[0].message?.content ??
          "I don't have that information in Ashraful's portfolio.",
      };
    } catch (error) {
      console.error('Error fetching AI response:', error);
      throw new InternalServerErrorException('Failed to get AI response');
    }
  }
}
