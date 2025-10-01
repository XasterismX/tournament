import {Body, Controller, Post} from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import startTournament from "./dto/StartTournament.dto";
import {Tournament} from "./entities/tournament.entity";

@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}


  @Post()
  async startTournament(@Body() startTournament: startTournament): Promise<Tournament> {

    return await this.tournamentsService.startTournament(startTournament.name)
  }

}
