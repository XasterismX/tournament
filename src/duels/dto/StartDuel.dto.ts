import {IsNotEmpty, IsUUID} from "class-validator";

export default class startDuel {

    @IsNotEmpty()
    @IsUUID()
    firstUserId: string
    @IsNotEmpty()
    @IsUUID()
    secondUserId:string

}