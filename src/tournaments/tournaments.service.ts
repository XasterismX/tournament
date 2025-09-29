import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Tournament} from "./entities/tournament.entity";
import {DataSource, Repository} from "typeorm";
import {User} from "../users/entities/user.entity";
import {mapOneOrManyArgs} from "rxjs/internal/util/mapOneOrManyArgs";

@Injectable()
export class TournamentsService {

    constructor(@InjectRepository(Tournament) private readonly tournamentRepo: Repository<Tournament>,
                @InjectRepository(User) private readonly userRepository: Repository<User>,
                private readonly dataSource: DataSource
                ) {
    }

    async startTournament(name: string){
        const tournaments: Tournament[] = await this.tournamentRepo.find({where: {status: "pending"}});
        for (const tournament of tournaments) {
            const usersOnTournament = await this.userRepository.find({where: {tournaments: {
                id: tournament.id
                    }}});
            usersOnTournament.sort((a, b) =>{
                if (a.elo < b.elo) return -1;
                if (a.elo > b.elo) return 1;
                return 0;
            });
                tournament.winner = usersOnTournament[0];
                tournament.status = "completed";

        }
        const newTournament = await this.tournamentRepo.create({name, status: "pending", });
        await this.dataSource.transaction(async (manager) =>{
            await manager.save(tournaments)
            await manager.save(newTournament)
        })
    }

}
