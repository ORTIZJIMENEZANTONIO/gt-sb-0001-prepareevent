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
exports.TreatmentOfPartialReturnsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const treatment_of_partial_returns_service_1 = require("./treatment-of-partial-returns.service");
let TreatmentOfPartialReturnsController = class TreatmentOfPartialReturnsController {
    constructor(service) {
        this.service = service;
    }
    async treatmentOfPartialReturns(pagination) {
        return await this.service.treatmentOfPartialReturns(pagination);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], TreatmentOfPartialReturnsController.prototype, "treatmentOfPartialReturns", null);
TreatmentOfPartialReturnsController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('treatment-of-partial-returns'),
    (0, swagger_1.ApiTags)("treatment-of-partial-returns"),
    __metadata("design:paramtypes", [treatment_of_partial_returns_service_1.TreatmentOfPartialReturnsService])
], TreatmentOfPartialReturnsController);
exports.TreatmentOfPartialReturnsController = TreatmentOfPartialReturnsController;
//# sourceMappingURL=treatment-of-partial-returns.controller.js.map