import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { ComerAgreementEventsService } from './comer-agreement-events.service';
import { ComerAgreementEventsController } from './comer-agreement-events.controller';

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
  providers: [ComerAgreementEventsService],
  controllers: [ComerAgreementEventsController]
})
export class ComerAgreementEventsModule {}
