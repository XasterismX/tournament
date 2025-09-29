import { Module } from '@nestjs/common';
import { DuelsService } from './duels.service';
import { DuelsController } from './duels.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Duel} from "./entities/duel.entity";
import {UsersModule} from "../users/users.module";
import {TournamentsModule} from "../tournaments/tournaments.module";
import {UsersService} from "../users/users.service";
import {TournamentsService} from "../tournaments/tournaments.service";
import {Tournament} from "../tournaments/entities/tournament.entity";
import {User} from "../users/entities/user.entity";

@Module({
  imports: [UsersModule, TournamentsModule, TypeOrmModule.forFeature([Duel, Tournament, User])],
  controllers: [DuelsController],
  providers: [DuelsService, UsersService, TournamentsService],
})
export class DuelsModule {}
