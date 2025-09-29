import { Duel } from "./entities/duel.entity";
import { DataSource, Repository } from "typeorm";
import { User } from "../users/entities/user.entity";
import { Tournament } from "../tournaments/entities/tournament.entity";
export declare class DuelsService {
    private readonly duelRepo;
    private readonly userRepository;
    private readonly tournamentRepository;
    private dataSource;
    constructor(duelRepo: Repository<Duel>, userRepository: Repository<User>, tournamentRepository: Repository<Tournament>, dataSource: DataSource);
    startDuel(firstUserId: string, secondUserId: string): Promise<User>;
}
