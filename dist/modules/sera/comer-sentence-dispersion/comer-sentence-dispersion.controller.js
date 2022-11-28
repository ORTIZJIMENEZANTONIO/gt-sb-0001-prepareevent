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
exports.ComerSentenceDispersionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sentence_dispersion_dto_1 = require("./dto/sentence-dispersion.dto");
const comer_sentence_dispersion_service_1 = require("./comer-sentence-dispersion.service");
let ComerSentenceDispersionController = class ComerSentenceDispersionController {
    constructor(service) {
        this.service = service;
    }
    async setSentenceDispersio(params) {
        return await this.service.setSentenceDispersion(params);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Setear Sentencia" }),
    (0, swagger_1.ApiBody)({
        type: sentence_dispersion_dto_1.SentenceDispersionDto,
        description: "Información de la Dirección a guardar",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Guarda Dirección",
        type: sentence_dispersion_dto_1.SentenceDispersionDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sentence_dispersion_dto_1.SentenceDispersionDto]),
    __metadata("design:returntype", Promise)
], ComerSentenceDispersionController.prototype, "setSentenceDispersio", null);
ComerSentenceDispersionController = __decorate([
    (0, common_1.Controller)("comer-sentence-dispersion"),
    __metadata("design:paramtypes", [comer_sentence_dispersion_service_1.ComerSentenceDispersionService])
], ComerSentenceDispersionController);
exports.ComerSentenceDispersionController = ComerSentenceDispersionController;
//# sourceMappingURL=comer-sentence-dispersion.controller.js.map