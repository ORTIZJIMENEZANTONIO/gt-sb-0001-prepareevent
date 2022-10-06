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
exports.WarehouseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const warehouse_service_1 = require("./warehouse.service");
const warehouse_dto_1 = require("./dto/warehouse.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let WarehouseController = class WarehouseController {
    constructor(warehouseService) {
        this.warehouseService = warehouseService;
    }
    async createWarehouse(warehouseDto) {
        return await this.warehouseService.createWarehouse(warehouseDto);
    }
    async getAllWarehouses(pagination) {
        return await this.warehouseService.getAllWarehouses(pagination);
    }
    async getWarehouseById(id) {
        return await this.warehouseService.getWarehouseById(id);
    }
    async updateWarehouse(id, regionalData) {
        return await this.warehouseService.updateWarehouse(id, regionalData);
    }
    async deleteWarehouse(id) {
        return await this.warehouseService.deleteWarehouse(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva almacéne' }),
    (0, swagger_1.ApiBody)({
        type: warehouse_dto_1.WarehouseDto,
        description: 'Información de la almacén a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda almacén',
        type: warehouse_dto_1.WarehouseDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [warehouse_dto_1.WarehouseDto]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "createWarehouse", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las almacenes' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de almacénes existenetes',
        type: warehouse_dto_1.WarehouseDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "getAllWarehouses", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener almacén por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la almacén'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Almacén obtenida por su identificador',
        type: warehouse_dto_1.WarehouseDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "getWarehouseById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar almacén' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador numérico de la almacén'
    }),
    (0, swagger_1.ApiBody)({
        type: warehouse_dto_1.WarehouseDto,
        description: 'Objeto de la almacén a modificar'
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, warehouse_dto_1.WarehouseDto]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "updateWarehouse", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar almacén por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la almacén a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar almacén por su identificador',
        type: warehouse_dto_1.WarehouseDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "deleteWarehouse", null);
WarehouseController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('warehouse'),
    (0, swagger_1.ApiTags)('warehouse'),
    __metadata("design:paramtypes", [warehouse_service_1.WarehouseService])
], WarehouseController);
exports.WarehouseController = WarehouseController;
//# sourceMappingURL=warehouse.controller.js.map