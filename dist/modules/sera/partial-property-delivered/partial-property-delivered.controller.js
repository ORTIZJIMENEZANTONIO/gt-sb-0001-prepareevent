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
exports.PartialPropertyDeliveredController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const partial_property_delivered_dto_1 = require("./dto/partial-property-delivered.dto");
const partial_property_delivered_service_1 = require("./partial-property-delivered.service");
let PartialPropertyDeliveredController = class PartialPropertyDeliveredController {
    constructor(service) {
        this.service = service;
    }
    async createComerLot(comer) {
        return await this.service.createNewPartialGood(comer);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Guardar nueva Direccióne" }),
    (0, swagger_1.ApiBody)({
        type: partial_property_delivered_dto_1.PartialPropertyDelivered,
        description: "Información de la Dirección a guardar",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Guarda Dirección",
        type: partial_property_delivered_dto_1.PartialPropertyDelivered,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [partial_property_delivered_dto_1.PartialPropertyDelivered]),
    __metadata("design:returntype", Promise)
], PartialPropertyDeliveredController.prototype, "createComerLot", null);
PartialPropertyDeliveredController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('partial-property-delivered'),
    (0, swagger_1.ApiTags)("partial-property-delivered"),
    __metadata("design:paramtypes", [partial_property_delivered_service_1.PartialPropertyDeliveredService])
], PartialPropertyDeliveredController);
exports.PartialPropertyDeliveredController = PartialPropertyDeliveredController;
//# sourceMappingURL=partial-property-delivered.controller.js.map