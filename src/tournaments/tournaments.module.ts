import { Module } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { TournamentsController } from './tournaments.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Tournament} from "./entities/tournament.entity";
import {User} from "../users/entities/user.entity";
import {UsersModule} from "../users/users.module";

@Module({
  imports: [TypeOrmModule.forFeature([Tournament, User]), UsersModule],
  controllers: [TournamentsController],
  providers: [TournamentsService],
  exports: [TournamentsModule]
})
export class TournamentsModule {}
