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
exports.FileUtilController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const file_util_service_1 = require("./file-util.service");
let FileUtilController = class FileUtilController {
    constructor(service) {
        this.service = service;
    }
    async createComerClient() {
        return await this.service.createXlsx();
    }
    async createThirdFile(params) {
        return await this.service.createThirdFile(params.eventId, params.fileName);
    }
    async createThirdBaseFile(params) {
        return await this.service.createThirdBaseFile(params.fileName, params.eventNumber, params.bankName);
    }
    async calculateGoodPrice(params) {
        return await this.service.calculateGoodPrice(params);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FileUtilController.prototype, "createComerClient", null);
__decorate([
    (0, common_1.Post)("/third-file"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileUtilController.prototype, "createThirdFile", null);
__decorate([
    (0, common_1.Post)("/third-base-file"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileUtilController.prototype, "createThirdBaseFile", null);
__decorate([
    (0, common_1.Post)("/calculate-good-price"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileUtilController.prototype, "calculateGoodPrice", null);
FileUtilController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)("file-util"),
    (0, swagger_1.ApiTags)("file-util"),
    __metadata("design:paramtypes", [file_util_service_1.FileUtilService])
], FileUtilController);
exports.FileUtilController = FileUtilController;
//# sourceMappingURL=file-util.controller.js.map