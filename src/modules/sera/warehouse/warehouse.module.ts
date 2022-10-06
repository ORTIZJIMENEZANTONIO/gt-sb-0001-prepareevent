import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_WAREHOUSE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3002
        }
      }
    ]),
  ],
  providers: [WarehouseService],
  controllers: [WarehouseController]
})
export class WarehouseModule {}
