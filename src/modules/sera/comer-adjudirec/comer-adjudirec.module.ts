import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { ComerAdjudirecService } from './comer-adjudirec.service';
import { ComerAdjudirecController } from './comer-adjudirec.controller';

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
  providers: [ComerAdjudirecService],
  controllers: [ComerAdjudirecController]
})
export class ComerAdjudirecModule {}
