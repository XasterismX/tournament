import {Body, Controller, Post} from '@nestjs/common';
import { DuelsService } from './duels.service';
import startDuel from "./dto/StartDuel.dto";

@Controller('duels')
export class DuelsController {
  constructor(private readonly duelsService: DuelsService) {}

  @Post()
  private async startDuel(@Body() startDule: startDuel){

    return await this.duelsService.startDuel(startDule.firstUserId, startDule.secondUserId)
  }


}
