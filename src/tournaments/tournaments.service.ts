import {HttpException, Injectable} from '@nestjs/common';
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

    async startTournament(name: string): Promise<Tournament> {
        const tournaments: Tournament[] = await this.tournamentRepo.find({where: {status: "pending"}});
        console.log(tournaments);
            try {


                for (const tournamentElem of tournaments) {
                    console.log(tournamentElem);
                   if (!tournamentElem.users){
                      tournamentElem.status = "completed";
                      continue
                  }
                  if (tournamentElem.users.length <1){
                      tournamentElem.status = "completed";
                      continue
                  }
                 tournamentElem.users.sort((a, b) =>{
                     console.log(1);

                     if (a.elo < b.elo){
                        return -1;
                     }
                     if (a.elo > b.elo){
                         return 1;
                     }
                     return 0;
                 })
                  tournamentElem.users.forEach((user) => {
                      user.tournament_played +=1
                  })
                  tournamentElem.winner = tournamentElem.users[0]

                }
            }
            catch (error) {
                console.error(error);
            }

        const newTournament = await this.tournamentRepo.create({name, status: "pending" });
        await this.dataSource.transaction(async (manager) =>{
            await manager.save(tournaments)
            await manager.save(newTournament)
        })
        return newTournament;
    }

}
