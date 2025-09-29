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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const tournament_entity_1 = require("../../tournaments/entities/tournament.entity");
const duel_entity_1 = require("../../duels/entities/duel.entity");
let User = class User {
    id;
    name;
    elo;
    duels_won;
    duels_lose;
    tournament_played;
    tournaments;
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: 100 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], User.prototype, "elo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => duel_entity_1.Duel, (duel) => duel.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", duel_entity_1.Duel)
], User.prototype, "duels_won", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => duel_entity_1.Duel, (duel) => duel.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", duel_entity_1.Duel)
], User.prototype, "duels_lose", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "tournament_played", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => tournament_entity_1.Tournament, (tournament) => tournament.id),
    __metadata("design:type", Array)
], User.prototype, "tournaments", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map