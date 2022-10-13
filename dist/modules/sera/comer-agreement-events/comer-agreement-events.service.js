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
exports.ComerAgreementEventsService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ComerAgreementEventsService = class ComerAgreementEventsService {
    constructor(proxy) {
        this.proxy = proxy;
    }
    async createComerConvEvent(comerEvent) {
        const pattern = { cmd: "createComerConvEvent" };
        return await this.proxy.send(pattern, comerEvent);
    }
    async getAllComerConvEvents(pagination) {
        const pattern = { cmd: "getAllComerConvEvents" };
        return await this.proxy.send(pattern, pagination);
    }
    async getComerConvEventById({ eventId }) {
        const pattern = { cmd: "getComerConvEventById" };
        const data = { eventId };
        return await this.proxy.send(pattern, data);
    }
};
ComerAgreementEventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("SERVICE_PREPAREEVENT")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ComerAgreementEventsService);
exports.ComerAgreementEventsService = ComerAgreementEventsService;
//# sourceMappingURL=comer-agreement-events.service.js.map