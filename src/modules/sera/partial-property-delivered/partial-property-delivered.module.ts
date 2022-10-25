import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { PartialPropertyDeliveredController } from './partial-property-delivered.controller';
import { PartialPropertyDeliveredService } from './partial-property-delivered.service';

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
  controllers: [PartialPropertyDeliveredController],
  providers: [PartialPropertyDeliveredService]
})
export class PartialPropertyDeliveredModule {}
