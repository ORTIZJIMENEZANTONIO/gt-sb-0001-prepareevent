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
exports.ComerBatchController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const comer_batch_service_1 = require("./comer-batch.service");
const comer_lot_dto_1 = require("./dto/comer-lot.dto");
const comer_lot_canceled_dto_1 = require("./dto/comer-lot-canceled.dto");
let ComerBatchController = class ComerBatchController {
    constructor(service) {
        this.service = service;
    }
    async createComerLot(comer) {
        return await this.service.createComerLot(comer);
    }
    async createComerLotCanceled(comer) {
        return await this.service.createComerLotCanceled(comer);
    }
    async getAllComersLot(pagination) {
        return await this.service.getAllComersLot(pagination);
    }
    async getComerLotByEventId(comer) {
        return await this.service.getComerLotByEventId(comer);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Guardar nueva Direccióne" }),
    (0, swagger_1.ApiBody)({
        type: comer_lot_dto_1.ComerLotDto,
        description: "Información de la Dirección a guardar",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Guarda Dirección",
        type: comer_lot_dto_1.ComerLotDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_lot_dto_1.ComerLotDto]),
    __metadata("design:returntype", Promise)
], ComerBatchController.prototype, "createComerLot", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "CREAR LOTE CANCELADO CON EL BIEN VIEJO" }),
    (0, swagger_1.ApiBody)({
        type: comer_lot_canceled_dto_1.ComerLotCanceledDto,
        description: "Información de la Dirección a guardar",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Guarda Dirección",
        type: comer_lot_canceled_dto_1.ComerLotCanceledDto,
    }),
    (0, common_1.Post)("/lot-canceled"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_lot_canceled_dto_1.ComerLotCanceledDto]),
    __metadata("design:returntype", Promise)
], ComerBatchController.prototype, "createComerLotCanceled", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Obtener lista de todas las almacenes" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de Direcciónes existenetes",
        type: comer_lot_dto_1.ComerLotDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ComerBatchController.prototype, "getAllComersLot", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Obtener lista de todas las almacenes" }),
    (0, swagger_1.ApiQuery)({
        name: "eventId",
        type: Number,
        description: "Id del evento",
    }),
    (0, swagger_1.ApiQuery)({
        name: "inicio",
        type: Number,
        required: false,
        description: "inicio",
    }),
    (0, swagger_1.ApiQuery)({
        name: "pageSize",
        type: Number,
        required: false,
        description: "Size",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de Direcciónes existenetes",
        type: comer_lot_dto_1.ComerLotDto,
    }),
    (0, common_1.Get)("/by-event-id"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComerBatchController.prototype, "getComerLotByEventId", null);
ComerBatchController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('comer-batch'),
    (0, swagger_1.ApiTags)("comer-batch"),
    __metadata("design:paramtypes", [comer_batch_service_1.ComerBatchService])
], ComerBatchController);
exports.ComerBatchController = ComerBatchController;
//# sourceMappingURL=comer-batch.controller.js.map