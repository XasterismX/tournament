"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tournament_entity_1 = require("./entities/tournament.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
let TournamentsService = class TournamentsService {
    tournamentRepo;
    userRepository;
    dataSource;
    constructor(tournamentRepo, userRepository, dataSource) {
        this.tournamentRepo = tournamentRepo;
        this.userRepository = userRepository;
        this.dataSource = dataSource;
    }
    async startTournament(name) {
        const tournaments = await this.tournamentRepo.find({ where: { status: "pending" } });
        console.log(tournaments);
        try {
            for (const tournamentElem of tournaments) {
                console.log(tournamentElem);
                if (!tournamentElem.users) {
                    tournamentElem.status = "completed";
                    continue;
                }
                if (tournamentElem.users.length < 1) {
                    tournamentElem.status = "completed";
                    continue;
                }
                tournamentElem.users.sort((a, b) => {
                    console.log(1);
                    if (a.elo < b.elo) {
                        return -1;
                    }
                    if (a.elo > b.elo) {
                        return 1;
                    }
                    return 0;
                });
                tournamentElem.users.forEach((user) => {
                    user.tournament_played += 1;
                });
                tournamentElem.winner = tournamentElem.users[0];
            }
        }
        catch (error) {
            console.error(error);
        }
        const newTournament = await this.tournamentRepo.create({ name, status: "pending" });
        await this.dataSource.transaction(async (manager) => {
            await manager.save(tournaments);
            await manager.save(newTournament);
        });
        return newTournament;
    }
};
exports.TournamentsService = TournamentsService;
exports.TournamentsService = TournamentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tournament_entity_1.Tournament)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], TournamentsService);
//# sourceMappingURL=tournaments.service.js.map