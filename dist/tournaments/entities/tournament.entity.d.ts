import { User } from "../../users/entities/user.entity";
export declare class Tournament {
    id: string;
    name: string;
    status: string;
    winner: User;
    users: User[];
}
