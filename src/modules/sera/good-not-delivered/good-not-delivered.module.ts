import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { GoodNotDeliveredController } from './good-not-delivered.controller';
import { GoodNotDeliveredService } from './good-not-delivered.service';

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
  controllers: [GoodNotDeliveredController],
  providers: [GoodNotDeliveredService]
})
export class GoodNotDeliveredModule {}
