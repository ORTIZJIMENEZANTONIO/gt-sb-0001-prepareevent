import { Module } from '@nestjs/common';
import { ComerBatchService } from './comer-batch.service';
import { ComerBatchController } from './comer-batch.controller';

@Module({
  providers: [ComerBatchService],
  controllers: [ComerBatchController]
})
export class ComerBatchModule {}
