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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuelsController = void 0;
const common_1 = require("@nestjs/common");
const duels_service_1 = require("./duels.service");
const StartDuel_dto_1 = __importDefault(require("./dto/StartDuel.dto"));
let DuelsController = class DuelsController {
    duelsService;
    constructor(duelsService) {
        this.duelsService = duelsService;
    }
    async startDuel(startDuel) {
        return await this.duelsService.startDuel(startDuel.firstUserId, startDuel.secondUserId);
    }
};
exports.DuelsController = DuelsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StartDuel_dto_1.default]),
    __metadata("design:returntype", Promise)
], DuelsController.prototype, "startDuel", null);
exports.DuelsController = DuelsController = __decorate([
    (0, common_1.Controller)('duels'),
    __metadata("design:paramtypes", [duels_service_1.DuelsService])
], DuelsController);
//# sourceMappingURL=duels.controller.js.map