import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { StorehouseService } from './storehouse.service';
import { StorehouseController } from './storehouse.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_STOREHOUSE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3002
        }
      }
    ]),
  ],
  providers: [StorehouseService],
  controllers: [StorehouseController]
})
export class StorehouseModule {}
