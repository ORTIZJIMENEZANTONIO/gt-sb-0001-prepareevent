import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { ComerSentenceDispersionController } from './comer-sentence-dispersion.controller';
import { ComerSentenceDispersionService } from './comer-sentence-dispersion.service';

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
  controllers: [ComerSentenceDispersionController],
  providers: [ComerSentenceDispersionService]
})
export class ComerSentenceDispersionModule {}
