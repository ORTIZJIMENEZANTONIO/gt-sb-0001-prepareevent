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
exports.ComerEventsService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ComerEventsService = class ComerEventsService {
    constructor(proxy) {
        this.proxy = proxy;
    }
    async createComerEvent(comerEvent) {
        const pattern = { cmd: "createComerEvent" };
        return await this.proxy.send(pattern, comerEvent);
    }
    async getAllComerEvents(pagination) {
        const pattern = { cmd: "getAllComerEvents" };
        return await this.proxy.send(pattern, pagination);
    }
    async getComerEventByAddress(comer) {
        const pattern = { cmd: "getComerEventByAddress" };
        const data = Object.assign({}, comer);
        return await this.proxy.send(pattern, data);
    }
    async getComerEventByAddressAndId(comerEvent) {
        const pattern = { cmd: "getComerEventByAddressAndId" };
        const data = Object.assign({}, comerEvent);
        return await this.proxy.send(pattern, data);
    }
    async getComerEventByTpEvent(comerEvent) {
        const pattern = { cmd: "getComerEventByTpEvent" };
        const data = Object.assign({}, comerEvent);
        return await this.proxy.send(pattern, data);
    }
};
ComerEventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("SERVICE_PREPAREEVENT")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ComerEventsService);
exports.ComerEventsService = ComerEventsService;
//# sourceMappingURL=comer-events.service.js.map