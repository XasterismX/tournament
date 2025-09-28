import {IsNumber, IsString, IsUUID} from "class-validator";

export default class GetUsers {

    @IsUUID()
    id: number;
    @IsString()
    name: string;
    @IsNumber()
    elo: number;
    @IsNumber()
    duels_won: number;
    @IsNumber()
    tournament_played: number
}