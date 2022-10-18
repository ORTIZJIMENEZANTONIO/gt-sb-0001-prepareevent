import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { FileUtilController } from './file-util.controller';
import { FileUtilService } from './file-util.service';

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
  controllers: [FileUtilController],
  providers: [FileUtilService]
})
export class FileUtilModule {}
