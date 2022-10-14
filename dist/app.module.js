"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
const path = require("path");
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const comer_events_module_1 = require("./modules/sera/comer-events/comer-events.module");
const comer_adjudirec_module_1 = require("./modules/sera/comer-adjudirec/comer-adjudirec.module");
const comer_agreement_events_module_1 = require("./modules/sera/comer-agreement-events/comer-agreement-events.module");
const comer_client_module_1 = require("./modules/sera/comer-client/comer-client.module");
const comer_property_by_batch_module_1 = require("./modules/sera/comer-property-by-batch/comer-property-by-batch.module");
const comer_rejected_property_module_1 = require("./modules/sera/comer-rejected-property/comer-rejected-property.module");
const comer_batch_module_1 = require("./modules/sera/comer-batch/comer-batch.module");
const mandate_function_module_1 = require("./modules/sera/mandate-function/mandate-function.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nest_winston_1.WinstonModule.forRoot({
                level: 'debug',
                format: winston.format.combine(winston.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss',
                }), winston.format.errors({ stack: true }), winston.format.splat(), winston.format.json()),
                transports: [
                    new winston.transports.File({
                        dirname: path.join(__dirname, './../log/debug/'),
                        filename: 'debug.log',
                        level: 'debug',
                    }),
                    new winston.transports.File({
                        dirname: path.join(__dirname, './../log/error/'),
                        filename: 'error.log',
                        level: 'error',
                    }),
                    new winston.transports.File({
                        dirname: path.join(__dirname, './../log/info/'),
                        filename: 'info.log',
                        level: 'info',
                    }),
                    new winston.transports.Console({ level: 'debug' }),
                ],
            }),
            comer_events_module_1.ComerEventsModule,
            comer_batch_module_1.ComerBatchModule,
            comer_adjudirec_module_1.ComerAdjudirecModule,
            comer_agreement_events_module_1.ComerAgreementEventsModule,
            comer_client_module_1.ComerClientModule,
            comer_property_by_batch_module_1.ComerPropertyByBatchModule,
            comer_rejected_property_module_1.ComerRejectedPropertyModule,
            mandate_function_module_1.MandateFunctionModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map