import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy} from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';

import { StorehouseDto } from './dto/storehouse.dto';

@Injectable()
export class StorehouseService {

  constructor(  
    @Inject('SERVICE_STOREHOUSE') private readonly storehouseProxy: ClientProxy 
  ) {}

  async createStorehouse( storehouseDto: StorehouseDto ) {
    const pattern = { cmd: 'createStorehouse' };
    return await this.storehouseProxy.send( pattern, storehouseDto );
  }

  async getAllStorehouses( pagination: PaginationDto ) {
    const pattern = { cmd: 'getAllStorehouses' };
    return await this.storehouseProxy.send( pattern, pagination );
  }

  async getStorehouseById( code: string ) {
    const pattern = { cmd: 'getstorehouseById' };
    return await this.storehouseProxy.send( pattern, code );
  }

  async updateStorehouse( code: string, storehouseDto: StorehouseDto ) {
    const pattern = { cmd: 'updateStorehouse' };
    const body = { code, ...storehouseDto };
    return await this.storehouseProxy.send( pattern, body );
  }

  async deleteStorehouse( id: string ) {
    const pattern = { cmd: 'deleteStorehouse' };
    return await this.storehouseProxy.send( pattern, id );
  }

}
