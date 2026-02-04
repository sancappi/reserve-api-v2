import {IsArray, IsNumber, IsString, IsEmail, IsEnum} from "class-validator";
import { UserProfile } from "../entities/user.entity";

export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsEnum(UserProfile)
    profile: UserProfile;
}