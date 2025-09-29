import { Tournament } from "../../tournaments/entities/tournament.entity";
import { Duel } from "../../duels/entities/duel.entity";
export declare class User {
    id: string;
    name: string;
    elo: number;
    duels_won: Duel;
    duels_lose: Duel;
    tournament_played: number;
    tournaments: Tournament[];
}
