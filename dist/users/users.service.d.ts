import CreateUser from "./dto/CreateUser.dto";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
export declare class UsersService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    create(user: CreateUser): Promise<User>;
    getTopUsers(count: number): Promise<User[]>;
}
