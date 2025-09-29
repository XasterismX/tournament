import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Duel} from "./entities/duel.entity";
import {DataSource, Repository} from "typeorm";
import {User} from "../users/entities/user.entity";
import {Tournament} from "../tournaments/entities/tournament.entity";

@Injectable()
export class DuelsService {
    constructor(@InjectRepository(Duel) private readonly duelRepo: Repository<Duel>,
                @InjectRepository(User) private readonly userRepository: Repository<User>,
                @InjectRepository(Tournament) private readonly tournamentRepository: Repository<Tournament>,
                private dataSource: DataSource
                ) {
    }

    async startDuel(firstUserId: string, secondUserId:string ): Promise<User> {

        const firstUser = await this.userRepository.findOne({ where: { id: firstUserId } });
        const secondUser = await this.userRepository.findOne({ where: { id: secondUserId } });
        const tournamnet = await this.tournamentRepository.findOne({where: {status: "pending"}})




        if (!tournamnet) {
            throw new NotFoundException("Турнир не найден")
        }
        if (!(firstUser && secondUser)){
            throw new BadRequestException("Пользователи должный быть разные")
        }

        const winner = Math.random() < 0.5 ? firstUser : secondUser;


        if (firstUser === winner) {
            firstUser.elo = firstUser.elo - 10;
            secondUser.elo = secondUser.elo + 10;
        }else{
            firstUser.elo = firstUser.elo - 10;
            secondUser.elo = secondUser.elo + 10;
        }

        const duel = this.duelRepo.create({
            winner_id: winner,
            loser_id: firstUser !== winner ? firstUser: secondUser,
            tournament_id: tournamnet,
        })
        const transaction = await this.dataSource.transaction(async manager =>{
            await manager.save(duel)
            await manager.save(firstUser)
            await manager.save(secondUser)

        })
        return  winner

    }

}
