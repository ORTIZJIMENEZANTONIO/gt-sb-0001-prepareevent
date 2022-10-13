import { Module } from '@nestjs/common';
import { ComerClientService } from './comer-client.service';
import { ComerClientController } from './comer-client.controller';

@Module({
  providers: [ComerClientService],
  controllers: [ComerClientController]
})
export class ComerClientModule {}
