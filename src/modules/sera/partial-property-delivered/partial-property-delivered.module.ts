import { Module } from '@nestjs/common';
import { PartialPropertyDeliveredController } from './partial-property-delivered.controller';
import { PartialPropertyDeliveredService } from './partial-property-delivered.service';

@Module({
  controllers: [PartialPropertyDeliveredController],
  providers: [PartialPropertyDeliveredService]
})
export class PartialPropertyDeliveredModule {}
