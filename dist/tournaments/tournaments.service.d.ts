import { Tournament } from "./entities/tournament.entity";
import { DataSource, Repository } from "typeorm";
import { User } from "../users/entities/user.entity";
export declare class TournamentsService {
    private readonly tournamentRepo;
    private readonly userRepository;
    private readonly dataSource;
    constructor(tournamentRepo: Repository<Tournament>, userRepository: Repository<User>, dataSource: DataSource);
    startTournament(name: string): Promise<Tournament>;
}
