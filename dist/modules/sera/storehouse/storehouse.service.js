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
exports.StorehouseService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let StorehouseService = class StorehouseService {
    constructor(storehouseProxy) {
        this.storehouseProxy = storehouseProxy;
    }
    async createStorehouse(storehouseDto) {
        const pattern = { cmd: 'createStorehouse' };
        return await this.storehouseProxy.send(pattern, storehouseDto);
    }
    async getAllStorehouses(pagination) {
        const pattern = { cmd: 'getAllStorehouses' };
        return await this.storehouseProxy.send(pattern, pagination);
    }
    async getStorehouseById(code) {
        const pattern = { cmd: 'getstorehouseById' };
        return await this.storehouseProxy.send(pattern, code);
    }
    async updateStorehouse(code, storehouseDto) {
        const pattern = { cmd: 'updateStorehouse' };
        const body = Object.assign({ code }, storehouseDto);
        return await this.storehouseProxy.send(pattern, body);
    }
    async deleteStorehouse(id) {
        const pattern = { cmd: 'deleteStorehouse' };
        return await this.storehouseProxy.send(pattern, id);
    }
};
StorehouseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_STOREHOUSE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], StorehouseService);
exports.StorehouseService = StorehouseService;
//# sourceMappingURL=storehouse.service.js.map