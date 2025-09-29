import { Module } from '@nestjs/common';
import { DuelsService } from './duels.service';
import { DuelsController } from './duels.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Duel} from "./entities/duel.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Duel])],
  controllers: [DuelsController],
  providers: [DuelsService],
})
export class DuelsModule {}
