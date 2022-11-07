import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { PaProcessController } from './pa-process.controller';
import { PaProcessService } from './pa-process.service';

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
  controllers: [PaProcessController],
  providers: [PaProcessService]
})
export class PaProcessModule {}
