import { User } from "../../users/entities/user.entity";
import { Tournament } from "../../tournaments/entities/tournament.entity";
export declare class Duel {
    id: string;
    winner_id: User;
    loser_id: User;
    tournament_id: Tournament;
}
