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
exports.StorehouseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const storehouse_service_1 = require("./storehouse.service");
const storehouse_dto_1 = require("./dto/storehouse.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let StorehouseController = class StorehouseController {
    constructor(storehouseService) {
        this.storehouseService = storehouseService;
    }
    async createstorehouse(storehouseDto) {
        return await this.storehouseService.createStorehouse(storehouseDto);
    }
    async getAllstorehouses(pagination) {
        return await this.storehouseService.getAllStorehouses(pagination);
    }
    async getstorehouseById(id) {
        return await this.storehouseService.getStorehouseById(id);
    }
    async updatestorehouse(idToUpdate, data) {
        return await this.storehouseService.updateStorehouse(idToUpdate, data);
    }
    async deletestorehouse(id) {
        return await this.storehouseService.deleteStorehouse(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva almacéne' }),
    (0, swagger_1.ApiBody)({
        type: storehouse_dto_1.StorehouseDto,
        description: 'Información de la bodega a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda evento en el repositorio de bodega',
        type: storehouse_dto_1.StorehouseDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [storehouse_dto_1.StorehouseDto]),
    __metadata("design:returntype", Promise)
], StorehouseController.prototype, "createstorehouse", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las bodega' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de bodegas existenetes',
        type: storehouse_dto_1.StorehouseDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], StorehouseController.prototype, "getAllstorehouses", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener bodega por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la bodega'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Bodega por su identificador',
        type: storehouse_dto_1.StorehouseDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StorehouseController.prototype, "getstorehouseById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar bodega' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador numérico de la bodega'
    }),
    (0, swagger_1.ApiBody)({
        type: storehouse_dto_1.StorehouseDto,
        description: 'Objeto de la bodega a modificar'
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, storehouse_dto_1.StorehouseDto]),
    __metadata("design:returntype", Promise)
], StorehouseController.prototype, "updatestorehouse", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar bodega por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la bodega a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar bodega por su identificador',
        type: storehouse_dto_1.StorehouseDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StorehouseController.prototype, "deletestorehouse", null);
StorehouseController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('storehouse'),
    (0, swagger_1.ApiTags)('storehouse'),
    __metadata("design:paramtypes", [storehouse_service_1.StorehouseService])
], StorehouseController);
exports.StorehouseController = StorehouseController;
//# sourceMappingURL=storehouse.controller.js.map