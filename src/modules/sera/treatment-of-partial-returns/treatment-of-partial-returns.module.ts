import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { TreatmentOfPartialReturnsController } from './treatment-of-partial-returns.controller';
import { TreatmentOfPartialReturnsService } from './treatment-of-partial-returns.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "SERVICE_PREPAREEVENT",
        transport: Transport.TCP,
        options: {
          host: "127.0.0.1",
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [TreatmentOfPartialReturnsController],
  providers: [TreatmentOfPartialReturnsService]
})
export class TreatmentOfPartialReturnsModule {}
