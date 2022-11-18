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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentFilterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const message_1 = require("../../../../shared/validation-messages/message");
class CurrentFilterDto {
}
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)({
        message: message_1.Message.REQUIRED("$property"),
    }),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 2, maxLength: 2 }),
    __metadata("design:type", Number)
], CurrentFilterDto.prototype, "month", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)({
        message: message_1.Message.REQUIRED("$property"),
    }),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 2022, maxLength: 4 }),
    __metadata("design:type", Number)
], CurrentFilterDto.prototype, "year", void 0);
exports.CurrentFilterDto = CurrentFilterDto;
//# sourceMappingURL=current-ifilter.dto.js.map