import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({ example: 'Sarah Connor', description: 'Sender full name' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @ApiProperty({ example: 'sarah@example.com', description: 'Sender email address' })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Project Collaboration Opportunity', description: 'Subject of inquiry' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  subject: string;

  @ApiProperty({
    example: 'Hi Alex, we would love to discuss a distributed backend contract opportunity.',
    minLength: 10,
    maxLength: 3000,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(10, { message: 'Message must be at least 10 characters long' })
  @MaxLength(3000, { message: 'Message cannot exceed 3000 characters' })
  message: string;
}
