import { UsersService } from './users.service';
import { User } from "./entities/user.entity";
import CreateUser from "./dto/CreateUser.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(user: CreateUser): Promise<User>;
    getTop(count: number): Promise<User[]>;
}
