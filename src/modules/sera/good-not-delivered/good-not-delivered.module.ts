import { Module } from '@nestjs/common';
import { GoodNotDeliveredController } from './good-not-delivered.controller';
import { GoodNotDeliveredService } from './good-not-delivered.service';

@Module({
  controllers: [GoodNotDeliveredController],
  providers: [GoodNotDeliveredService]
})
export class GoodNotDeliveredModule {}
