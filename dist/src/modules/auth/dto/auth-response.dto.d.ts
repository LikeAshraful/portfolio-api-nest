import { UserResponseDto } from '../../users/dto/user-response.dto';
export declare class AuthResponseDto {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    user: UserResponseDto;
}
