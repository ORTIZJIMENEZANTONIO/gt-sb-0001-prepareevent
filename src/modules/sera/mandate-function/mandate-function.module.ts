import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { MandateFunctionController } from './mandate-function.controller';
import { MandateFunctionService } from './mandate-function.service';

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
  controllers: [MandateFunctionController],
  providers: [MandateFunctionService]
})
export class MandateFunctionModule {}
