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
exports.DuelsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const duel_entity_1 = require("./entities/duel.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const tournament_entity_1 = require("../tournaments/entities/tournament.entity");
let DuelsService = class DuelsService {
    duelRepo;
    userRepository;
    tournamentRepository;
    dataSource;
    constructor(duelRepo, userRepository, tournamentRepository, dataSource) {
        this.duelRepo = duelRepo;
        this.userRepository = userRepository;
        this.tournamentRepository = tournamentRepository;
        this.dataSource = dataSource;
    }
    async startDuel(firstUserId, secondUserId) {
        const firstUser = await this.userRepository.findOne({ where: { id: firstUserId } });
        const secondUser = await this.userRepository.findOne({ where: { id: secondUserId } });
        const tournamnet = await this.tournamentRepository.findOne({ where: { status: "pending" } });
        if (!tournamnet) {
            throw new common_1.NotFoundException("Турнир не найден");
        }
        if (!(firstUser && secondUser)) {
            throw new common_1.BadRequestException("Пользователи должный быть разные");
        }
        const winner = Math.random() < 0.5 ? firstUser : secondUser;
        if (firstUser === winner) {
            firstUser.elo = firstUser.elo - 10;
            secondUser.elo = secondUser.elo + 10;
        }
        else {
            firstUser.elo = firstUser.elo - 10;
            secondUser.elo = secondUser.elo + 10;
        }
        const duel = this.duelRepo.create({
            winner_id: winner,
            loser_id: firstUser !== winner ? firstUser : secondUser,
            tournament_id: tournamnet,
        });
        const transaction = await this.dataSource.transaction(async (manager) => {
            await manager.save(duel);
            await manager.save(firstUser);
            await manager.save(secondUser);
        });
        return winner;
    }
};
exports.DuelsService = DuelsService;
exports.DuelsService = DuelsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(duel_entity_1.Duel)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(tournament_entity_1.Tournament)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], DuelsService);
//# sourceMappingURL=duels.service.js.map