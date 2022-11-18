import { Module } from "@nestjs/common";
import { WinstonModule } from "nest-winston";
import * as winston from "winston";
import * as path from "path";

import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { ComerEventsModule } from "./modules/sera/comer-events/comer-events.module";
import { ComerAdjudirecModule } from "./modules/sera/comer-adjudirec/comer-adjudirec.module";
import { ComerAgreementEventsModule } from "./modules/sera/comer-agreement-events/comer-agreement-events.module";
import { ComerClientModule } from "./modules/sera/comer-client/comer-client.module";
import { ComerPropertyByBatchModule } from "./modules/sera/comer-property-by-batch/comer-property-by-batch.module";
import { ComerRejectedPropertyModule } from "./modules/sera/comer-rejected-property/comer-rejected-property.module";
import { ComerBatchModule } from "./modules/sera/comer-batch/comer-batch.module";
import { MandateFunctionModule } from "./modules/sera/mandate-function/mandate-function.module";
import { FileUtilModule } from "./modules/sera/file-util/file-util.module";
import { TreatmentOfPartialReturnsModule } from "./modules/sera/treatment-of-partial-returns/treatment-of-partial-returns.module";
import { PartialPropertyDeliveredModule } from "./modules/sera/partial-property-delivered/partial-property-delivered.module";
import { GoodNotDeliveredModule } from "./modules/sera/good-not-delivered/good-not-delivered.module";
import { PaProcessModule } from "./modules/sera/pa-process/pa-process.module";
import { CurrentEventModule } from "./modules/sera/current-event/current-event.module";
import { APP_FILTER } from "@nestjs/core";
import { AllExceptionsFilter } from "./core/exception.interceptor";
@Module({
  imports: [
    WinstonModule.forRoot({
      level: "debug",
      format: winston.format.combine(
        winston.format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss",
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
      ),
      transports: [
        new winston.transports.File({
          dirname: path.join(__dirname, "./../log/debug/"),
          filename: "debug.log",
          level: "debug",
        }),
        new winston.transports.File({
          dirname: path.join(__dirname, "./../log/error/"),
          filename: "error.log",
          level: "error",
        }),
        new winston.transports.File({
          dirname: path.join(__dirname, "./../log/info/"),
          filename: "info.log",
          level: "info",
        }),
        new winston.transports.Console({ level: "debug" }),
      ],
    }),
    ComerEventsModule,
    ComerBatchModule,
    ComerAdjudirecModule,
    ComerAgreementEventsModule,
    ComerClientModule,
    ComerPropertyByBatchModule,
    ComerRejectedPropertyModule,
    MandateFunctionModule,
    FileUtilModule,
    TreatmentOfPartialReturnsModule,
    PartialPropertyDeliveredModule,
    GoodNotDeliveredModule,
    PaProcessModule,
    CurrentEventModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
