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
exports.WarehouseService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let WarehouseService = class WarehouseService {
    constructor(warehouseProxy) {
        this.warehouseProxy = warehouseProxy;
    }
    async createWarehouse(warehouseDto) {
        const pattern = { cmd: 'createWarehouse' };
        return await this.warehouseProxy.send(pattern, warehouseDto);
    }
    async getAllWarehouses(pagination) {
        const pattern = { cmd: 'getAllWarehouses' };
        return await this.warehouseProxy.send(pattern, pagination);
    }
    async getWarehouseById(id) {
        const pattern = { cmd: 'getWarehouseById' };
        return await this.warehouseProxy.send(pattern, id);
    }
    async updateWarehouse(idToUpdate, body) {
        const pattern = { cmd: 'updateWarehouse' };
        const data = Object.assign({ idToUpdate }, body);
        return await this.warehouseProxy.send(pattern, data);
    }
    async deleteWarehouse(id) {
        const pattern = { cmd: 'deleteWarehouse' };
        return await this.warehouseProxy.send(pattern, id);
    }
};
WarehouseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_WAREHOUSE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], WarehouseService);
exports.WarehouseService = WarehouseService;
//# sourceMappingURL=warehouse.service.js.map