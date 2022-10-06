import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SubdelegationController } from './subdelegation.controller';
import { SubdelegationService } from './subdelegation.service';

@Module({
  controllers: [SubdelegationController],
  providers: [SubdelegationService,
    
  ],
  imports:[
    ClientsModule.register([
      {
        name: 'SERVICE_SB_0001',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3002,
        },
      }
    ])
  ]
})
export class SubdelegationModule {}
