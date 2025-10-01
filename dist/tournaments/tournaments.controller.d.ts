import { TournamentsService } from './tournaments.service';
import startTournament from "./dto/StartTournament.dto";
import { Tournament } from "./entities/tournament.entity";
export declare class TournamentsController {
    private readonly tournamentsService;
    constructor(tournamentsService: TournamentsService);
    startTournament(startTournament: startTournament): Promise<Tournament>;
}
