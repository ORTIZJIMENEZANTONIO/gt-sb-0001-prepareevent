import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { CurrentEventController } from './current-event.controller';
import { CurrentEventService } from './current-event.service';

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
  controllers: [CurrentEventController],
  providers: [CurrentEventService]
})
export class CurrentEventModule {}
