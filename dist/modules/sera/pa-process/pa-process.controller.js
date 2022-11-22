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
exports.PaProcessController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const change_status_validate_dto_1 = require("./dto/change-status-validate.dto");
const reject_dto_1 = require("./dto/reject.dto");
const remmitance_prep_by_good_dto_1 = require("./dto/remmitance-prep-by-good.dto");
const pa_process_service_1 = require("./pa-process.service");
let PaProcessController = class PaProcessController {
    constructor(service) {
        this.service = service;
    }
    async paReject(comer) {
        return await this.service.paReject(comer);
    }
    async paRemittancePrepByGood(comer) {
        return await this.service.paRemittancePrepByGood(comer);
    }
    async paChangeStatusValidate(comer) {
        return await this.service.paChangeStatusValidate(comer);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Guardar nueva Direccióne" }),
    (0, swagger_1.ApiBody)({
        type: reject_dto_1.PaRejectDto,
        description: "Información de la Dirección a guardar",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Guarda Dirección",
        type: reject_dto_1.PaRejectDto,
    }),
    (0, common_1.Post)('/pa-reject'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reject_dto_1.PaRejectDto]),
    __metadata("design:returntype", Promise)
], PaProcessController.prototype, "paReject", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "SERA.PA_REMESA_PREPXBIEN" }),
    (0, swagger_1.ApiBody)({
        type: remmitance_prep_by_good_dto_1.RemittancePrepByGoodDto,
        description: "Información de la Dirección a guardar",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Guarda Dirección",
        type: remmitance_prep_by_good_dto_1.RemittancePrepByGoodDto,
    }),
    (0, common_1.Post)('/pa-remittance-prep-by-good'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [remmitance_prep_by_good_dto_1.RemittancePrepByGoodDto]),
    __metadata("design:returntype", Promise)
], PaProcessController.prototype, "paRemittancePrepByGood", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "SERA.PA_REMESA_PREPXBIEN" }),
    (0, swagger_1.ApiBody)({
        type: remmitance_prep_by_good_dto_1.RemittancePrepByGoodDto,
        description: "Información de la Dirección a guardar",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Guarda Dirección",
        type: remmitance_prep_by_good_dto_1.RemittancePrepByGoodDto,
    }),
    (0, common_1.Post)('/pa-change-status-validate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_status_validate_dto_1.ChangeStatusValidateDto]),
    __metadata("design:returntype", Promise)
], PaProcessController.prototype, "paChangeStatusValidate", null);
PaProcessController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('pa-process'),
    (0, swagger_1.ApiTags)("pa-process"),
    __metadata("design:paramtypes", [pa_process_service_1.PaProcessService])
], PaProcessController);
exports.PaProcessController = PaProcessController;
//# sourceMappingURL=pa-process.controller.js.map