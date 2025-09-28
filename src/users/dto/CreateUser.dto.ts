import {IsNotEmpty, IsString,} from "class-validator";

export default class CreateUser{

    @IsNotEmpty()
    @IsString()
    name: string;
}