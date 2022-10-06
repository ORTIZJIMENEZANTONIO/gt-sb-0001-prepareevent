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
exports.SubdelegationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const subdelegation_dto_1 = require("./dto/subdelegation.dto");
const subdelegation_service_1 = require("./subdelegation.service");
let SubdelegationController = class SubdelegationController {
    constructor(subdelegationService) {
        this.subdelegationService = subdelegationService;
    }
    async getAllSubdelegation(pagination) {
        return await this.subdelegationService.getAllSubdelegation(pagination);
    }
    async getSubdelegationById(id) {
        return await this.subdelegationService.getSubdelegationById(id);
    }
    async createSubdelegation(subdelegationDTO) {
        return await this.subdelegationService.createSubdelegation(subdelegationDTO);
    }
    async updateSubdelegation(subdelegationDTO, id) {
        return await this.subdelegationService.updateSubdelegation(subdelegationDTO, id);
    }
    async deleteSubdelegation(id) {
        return await this.subdelegationService.deleteSubdelegation(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [subdelegation_dto_1.SubdelegationDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SubdelegationController.prototype, "getAllSubdelegation", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: subdelegation_dto_1.SubdelegationDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador subdelegacion'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SubdelegationController.prototype, "getSubdelegationById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: subdelegation_dto_1.SubdelegationDTO
    }),
    (0, swagger_1.ApiBody)({
        type: subdelegation_dto_1.SubdelegationDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subdelegation_dto_1.SubdelegationDTO]),
    __metadata("design:returntype", Promise)
], SubdelegationController.prototype, "createSubdelegation", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador subdelegacion'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: subdelegation_dto_1.SubdelegationDTO
    }),
    (0, swagger_1.ApiBody)({
        type: subdelegation_dto_1.SubdelegationDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subdelegation_dto_1.SubdelegationDTO, Number]),
    __metadata("design:returntype", Promise)
], SubdelegationController.prototype, "updateSubdelegation", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador subdelegacion'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SubdelegationController.prototype, "deleteSubdelegation", null);
SubdelegationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('subdelegation'),
    (0, swagger_1.ApiTags)('subdelegation'),
    __metadata("design:paramtypes", [subdelegation_service_1.SubdelegationService])
], SubdelegationController);
exports.SubdelegationController = SubdelegationController;
//# sourceMappingURL=subdelegation.controller.js.map