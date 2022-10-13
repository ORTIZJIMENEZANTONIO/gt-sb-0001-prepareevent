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
exports.ComerAgreementEventsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const comer_agreement_events_service_1 = require("./comer-agreement-events.service");
const comer_agreement_events_dto_1 = require("./dto/comer-agreement-events.dto");
let ComerAgreementEventsController = class ComerAgreementEventsController {
    constructor(service) {
        this.service = service;
    }
    async createComerEvent(comerEvent) {
        return await this.service.createComerConvEvent(comerEvent);
    }
    async getAllComerEvents(pagination) {
        return await this.service.getAllComerConvEvents(pagination);
    }
    async getComerConvEventById(comerconvEvent) {
        return await this.service.getComerConvEventById(comerconvEvent);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Guardar nueva Direccióne" }),
    (0, swagger_1.ApiBody)({
        type: comer_agreement_events_dto_1.ComerConvEventDto,
        description: "Información de la Dirección a guardar",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Guarda Dirección",
        type: comer_agreement_events_dto_1.ComerConvEventDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_agreement_events_dto_1.ComerConvEventDto]),
    __metadata("design:returntype", Promise)
], ComerAgreementEventsController.prototype, "createComerEvent", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Obtener lista de todas las almacenes" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de Direcciónes existenetes",
        type: comer_agreement_events_dto_1.ComerConvEventDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ComerAgreementEventsController.prototype, "getAllComerEvents", null);
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
        type: comer_agreement_events_dto_1.ComerConvEventDto,
    }),
    (0, common_1.Get)("/by-id"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_agreement_events_dto_1.ComerConvEventDto]),
    __metadata("design:returntype", Promise)
], ComerAgreementEventsController.prototype, "getComerConvEventById", null);
ComerAgreementEventsController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)("comer-agreement-events"),
    (0, swagger_1.ApiTags)("comer-agreement-events"),
    __metadata("design:paramtypes", [comer_agreement_events_service_1.ComerAgreementEventsService])
], ComerAgreementEventsController);
exports.ComerAgreementEventsController = ComerAgreementEventsController;
//# sourceMappingURL=comer-agreement-events.controller.js.map