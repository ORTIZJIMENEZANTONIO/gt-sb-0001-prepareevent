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
exports.FileUtilService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let FileUtilService = class FileUtilService {
    constructor(proxy) {
        this.proxy = proxy;
    }
    async createXlsx() {
        const pattern = { cmd: "createXlsx" };
        return await this.proxy.send(pattern, {});
    }
    async createThirdFile(eventId, fileName) {
        const pattern = { cmd: "createThirdFile" };
        return await this.proxy.send(pattern, { eventId, fileName });
    }
    async createThirdBaseFile(fileName, eventNumber, bankName) {
        const pattern = { cmd: "createThirdBaseFile" };
        return await this.proxy.send(pattern, { fileName, eventNumber, bankName });
    }
    async calculateGoodPrice(params) {
        const pattern = { cmd: "calculateGoodPrice" };
        return await this.proxy.send(pattern, params);
    }
};
FileUtilService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("SERVICE_PREPAREEVENT")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], FileUtilService);
exports.FileUtilService = FileUtilService;
//# sourceMappingURL=file-util.service.js.map