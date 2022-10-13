import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { ComerRejectedPropertyService } from './comer-rejected-property.service';
import { ComerRejectedPropertyController } from './comer-rejected-property.controller';

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
  providers: [ComerRejectedPropertyService],
  controllers: [ComerRejectedPropertyController]
})
export class ComerRejectedPropertyModule {}
