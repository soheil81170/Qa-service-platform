import { IsString,  } from "class-validator";

export class InitiateAdminDto {
     
    @IsString()
    username: string;
    @IsString()
    password: string;

}   