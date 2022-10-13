import { Module } from '@nestjs/common';
import { ComerPropertyByBatchService } from './comer-property-by-batch.service';
import { ComerPropertyByBatchController } from './comer-property-by-batch.controller';

@Module({
  providers: [ComerPropertyByBatchService],
  controllers: [ComerPropertyByBatchController]
})
export class ComerPropertyByBatchModule {}
