import { Module } from '@nestjs/common';
import { TreatmentOfPartialReturnsController } from './treatment-of-partial-returns.controller';
import { TreatmentOfPartialReturnsService } from './treatment-of-partial-returns.service';

@Module({
  controllers: [TreatmentOfPartialReturnsController],
  providers: [TreatmentOfPartialReturnsService]
})
export class TreatmentOfPartialReturnsModule {}
