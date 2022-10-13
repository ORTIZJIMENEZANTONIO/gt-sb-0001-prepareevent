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
exports.ComerEventsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const comer_events_dto_1 = require("./dto/comer-events.dto");
const comer_events_service_1 = require("./comer-events.service");
let ComerEventsController = class ComerEventsController {
    constructor(service) {
        this.service = service;
    }
    async createComerEvent(comerEvent) {
        return await this.service.createComerEvent(comerEvent);
    }
    async getAllComerEvents(pagination) {
        return await this.service.getAllComerEvents(pagination);
    }
    async getComerEventByAddress(comer) {
        return await this.service.getComerEventByAddress(comer);
    }
    async getComerEventByAddressAndId(comer) {
        return await this.service.getComerEventByAddressAndId(comer);
    }
    async getComerEventByTpEvent(comerEvent) {
        return await this.service.getComerEventByTpEvent(comerEvent);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Guardar nueva Direccióne" }),
    (0, swagger_1.ApiBody)({
        type: comer_events_dto_1.ComerEventDto,
        description: "Información de la Dirección a guardar",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Guarda Dirección",
        type: comer_events_dto_1.ComerEventDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_events_dto_1.ComerEventDto]),
    __metadata("design:returntype", Promise)
], ComerEventsController.prototype, "createComerEvent", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Obtener lista de todas las almacenes" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de Direcciónes existenetes",
        type: comer_events_dto_1.ComerEventDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ComerEventsController.prototype, "getAllComerEvents", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Obtener Dirección por su dirección" }),
    (0, swagger_1.ApiQuery)({
        name: "address",
        type: String,
        description: "Dirección",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Dirección obtenida por su identificador",
        type: comer_events_dto_1.ComerEventDto,
    }),
    (0, common_1.Get)("address"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComerEventsController.prototype, "getComerEventByAddress", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Obtener eventos por su dirección y id" }),
    (0, swagger_1.ApiQuery)({
        name: "address",
        type: String,
        description: "Dirección",
    }),
    (0, swagger_1.ApiQuery)({
        name: "eventId",
        type: String,
        description: "Id del Evento",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Evento",
        type: comer_events_dto_1.ComerEventDto,
    }),
    (0, common_1.Get)("adress-and-eventid"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_events_dto_1.ComerEventDto]),
    __metadata("design:returntype", Promise)
], ComerEventsController.prototype, "getComerEventByAddressAndId", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Obtener eventos por eventTpId" }),
    (0, swagger_1.ApiBody)({
        type: comer_events_dto_1.ComerEventDto,
        description: "Información de la Dirección a guardar",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Dirección obtenida por su identificador",
        type: comer_events_dto_1.ComerEventDto,
    }),
    (0, common_1.Post)("/tp-event-amd-not-sold"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComerEventsController.prototype, "getComerEventByTpEvent", null);
ComerEventsController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)("comer-events"),
    (0, swagger_1.ApiTags)("comer-events"),
    __metadata("design:paramtypes", [comer_events_service_1.ComerEventsService])
], ComerEventsController);
exports.ComerEventsController = ComerEventsController;
//# sourceMappingURL=comer-events.controller.js.map