import { ContactStatus } from '../../../database/generated/prisma/enums';
export declare class UpdateContactStatusDto {
    status: ContactStatus;
    notes?: string;
}
