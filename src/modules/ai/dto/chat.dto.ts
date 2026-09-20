import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class ChatDto {
  @ApiProperty({
    description: 'Question or message for the portfolio AI assistant',
    example: "What are Ashraful's core backend skills and technologies?",
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  message: string;
}
