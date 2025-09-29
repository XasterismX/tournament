"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuelsModule = void 0;
const common_1 = require("@nestjs/common");
const duels_service_1 = require("./duels.service");
const duels_controller_1 = require("./duels.controller");
const typeorm_1 = require("@nestjs/typeorm");
const duel_entity_1 = require("./entities/duel.entity");
const users_module_1 = require("../users/users.module");
const tournaments_module_1 = require("../tournaments/tournaments.module");
const users_service_1 = require("../users/users.service");
const tournaments_service_1 = require("../tournaments/tournaments.service");
const tournament_entity_1 = require("../tournaments/entities/tournament.entity");
const user_entity_1 = require("../users/entities/user.entity");
let DuelsModule = class DuelsModule {
};
exports.DuelsModule = DuelsModule;
exports.DuelsModule = DuelsModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, tournaments_module_1.TournamentsModule, typeorm_1.TypeOrmModule.forFeature([duel_entity_1.Duel, tournament_entity_1.Tournament, user_entity_1.User])],
        controllers: [duels_controller_1.DuelsController],
        providers: [duels_service_1.DuelsService, users_service_1.UsersService, tournaments_service_1.TournamentsService],
    })
], DuelsModule);
//# sourceMappingURL=duels.module.js.map