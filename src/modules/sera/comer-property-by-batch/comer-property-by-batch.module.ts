import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { ComerPropertyByBatchService } from './comer-property-by-batch.service';
import { ComerPropertyByBatchController } from './comer-property-by-batch.controller';

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
  providers: [ComerPropertyByBatchService],
  controllers: [ComerPropertyByBatchController]
})
export class ComerPropertyByBatchModule {}
