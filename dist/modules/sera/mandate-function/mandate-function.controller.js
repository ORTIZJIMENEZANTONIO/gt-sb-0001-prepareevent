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
exports.MandateFunctionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mandate_function_dto_1 = require("./dto/mandate-function.dto");
const mandate_function_service_1 = require("./mandate-function.service");
let MandateFunctionController = class MandateFunctionController {
    constructor(service) {
        this.service = service;
    }
    async updateMandate(data) {
        return await this.service.updateMandate(data);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Obtener lista de todas las almacenes" }),
    (0, swagger_1.ApiBody)({
        type: mandate_function_dto_1.MandateFunctionDto,
        description: 'Objeto del tipo'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de Direcciónes existenetes",
        type: mandate_function_dto_1.MandateFunctionDto,
    }),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mandate_function_dto_1.MandateFunctionDto]),
    __metadata("design:returntype", Promise)
], MandateFunctionController.prototype, "updateMandate", null);
MandateFunctionController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)("mandate-function"),
    (0, swagger_1.ApiTags)("mandate-function"),
    __metadata("design:paramtypes", [mandate_function_service_1.MandateFunctionService])
], MandateFunctionController);
exports.MandateFunctionController = MandateFunctionController;
//# sourceMappingURL=mandate-function.controller.js.map