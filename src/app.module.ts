import { Module } from '@nestjs/common';

import "dotenv/config"
import {TypeOrmModule} from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
import * as process from "node:process";
import * as path from "node:path";
import {User} from "./users/entities/user.entity";


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [User],
  }), UsersModule],

})
export class AppModule {}
