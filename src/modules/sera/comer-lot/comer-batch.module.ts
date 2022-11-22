import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { ComerBatchService } from './comer-batch.service';
import { ComerBatchController } from './comer-batch.controller';

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
  providers: [ComerBatchService],
  controllers: [ComerBatchController]
})
export class ComerBatchModule {}
