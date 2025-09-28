import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import { UsersService } from './users.service';
import {User} from "./entities/user.entity";
import CreateUser from "./dto/CreateUser.dto";
import GetUsers from "./dto/GetUser.dto";



@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: CreateUser): Promise<User> {
    console.log(user);
    return this.usersService.create(user)

  }
  @Get('/top')
  getTop(@Query("count") count: number): Promise<User[]> {

    return this.usersService.getTopUsers(count);

  }
}
