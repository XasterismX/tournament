import {IsNotEmpty, IsString} from "class-validator";

export default class startTournament{
    @IsNotEmpty()
    @IsString()
    name: string
}