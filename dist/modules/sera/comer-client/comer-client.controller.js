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
exports.ComerClientController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const comer_client_dto_1 = require("./dto/comer-client.dto.");
const comer_client_service_1 = require("./comer-client.service");
let ComerClientController = class ComerClientController {
    constructor(service) {
        this.service = service;
    }
    async createComerClient(comer) {
        return await this.service.createComerClient(comer);
    }
    async getAllComersClient(pagination) {
        return await this.service.getAllComersClient(pagination);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Guardar nueva Direccióne" }),
    (0, swagger_1.ApiBody)({
        type: comer_client_dto_1.ComerClientDto,
        description: "Información de la Dirección a guardar",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Guarda Dirección",
        type: comer_client_dto_1.ComerClientDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_client_dto_1.ComerClientDto]),
    __metadata("design:returntype", Promise)
], ComerClientController.prototype, "createComerClient", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Obtener lista de todas las almacenes" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de Direcciónes existenetes",
        type: comer_client_dto_1.ComerClientDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ComerClientController.prototype, "getAllComersClient", null);
ComerClientController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)("comer-client"),
    (0, swagger_1.ApiTags)("comer-client"),
    __metadata("design:paramtypes", [comer_client_service_1.ComerClientService])
], ComerClientController);
exports.ComerClientController = ComerClientController;
//# sourceMappingURL=comer-client.controller.js.map