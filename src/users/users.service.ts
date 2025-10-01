import {ForbiddenException, Injectable} from '@nestjs/common';
import CreateUser from "./dto/CreateUser.dto";
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import GetUsers from "./dto/GetUser.dto";

@Injectable()
export class UsersService {


    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {
    }
     create(user: CreateUser): Promise<User> {

        if (!user) {
            throw new ForbiddenException("No user");
        }
        const createUser = this.userRepo.save(user);
        createUser.then(user => {console.log(user)})
        return createUser;


    }

    async getTopUsers(count: number): Promise<User[]> {
        const topUsers = await this.userRepo.find({
            order:{elo: "DESC", tournament_played: "DESC"},
            take: count,
            relations: {
                duels_won: true,
                duels_lose: true
            }})
        return topUsers;
    }
}
