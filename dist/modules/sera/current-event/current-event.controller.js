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
exports.CurrentEventController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const current_event_service_1 = require("./current-event.service");
const current_ifilter_dto_1 = require("./dto/current-ifilter.dto");
let CurrentEventController = class CurrentEventController {
    constructor(service) {
        this.service = service;
    }
    getCurrentEvents(params) {
        return this.service.getCurrentEvents(params);
    }
    spEventsInProgress() {
        return this.service.spEventsInProgress({});
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "SERA.PA_REMESA_PREPXBIEN" }),
    (0, swagger_1.ApiQuery)({
        name: 'year',
        type: Number,
        description: "año",
    }),
    (0, swagger_1.ApiQuery)({
        name: 'month',
        type: Number,
        description: "mes",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Guarda Dirección",
        type: Array,
    }),
    (0, common_1.Get)('current'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_ifilter_dto_1.CurrentFilterDto]),
    __metadata("design:returntype", void 0)
], CurrentEventController.prototype, "getCurrentEvents", null);
__decorate([
    (0, common_1.Get)('in-progress'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CurrentEventController.prototype, "spEventsInProgress", null);
CurrentEventController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('current-event'),
    (0, swagger_1.ApiTags)("current-event"),
    __metadata("design:paramtypes", [current_event_service_1.CurrentEventService])
], CurrentEventController);
exports.CurrentEventController = CurrentEventController;
//# sourceMappingURL=current-event.controller.js.map