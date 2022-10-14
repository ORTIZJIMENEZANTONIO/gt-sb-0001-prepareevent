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
exports.ComerRejectedPropertyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const comer_rejected_property_service_1 = require("./comer-rejected-property.service");
const comer_rejected_property_dto_1 = require("./dto/comer-rejected-property.dto");
let ComerRejectedPropertyController = class ComerRejectedPropertyController {
    constructor(service) {
        this.service = service;
    }
    async createComerRejectedProperty(comerEvent) {
        return await this.service.createComerRejectedProperty(comerEvent);
    }
    async getAllComersRejectedProperties(pagination) {
        return await this.service.getAllComersRejectedProperties(pagination);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Guardar nueva Direccióne" }),
    (0, swagger_1.ApiBody)({
        type: comer_rejected_property_dto_1.ComerRejectedGoodDto,
        description: "Información de la Dirección a guardar",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Guarda Dirección",
        type: comer_rejected_property_dto_1.ComerRejectedGoodDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_rejected_property_dto_1.ComerRejectedGoodDto]),
    __metadata("design:returntype", Promise)
], ComerRejectedPropertyController.prototype, "createComerRejectedProperty", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Obtener lista de todas las almacenes" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de Direcciónes existenetes",
        type: comer_rejected_property_dto_1.ComerRejectedGoodDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ComerRejectedPropertyController.prototype, "getAllComersRejectedProperties", null);
ComerRejectedPropertyController = __decorate([
    (0, common_1.Controller)('comer-rejected-property'),
    __metadata("design:paramtypes", [comer_rejected_property_service_1.ComerRejectedPropertyService])
], ComerRejectedPropertyController);
exports.ComerRejectedPropertyController = ComerRejectedPropertyController;
//# sourceMappingURL=comer-rejected-property.controller.js.map