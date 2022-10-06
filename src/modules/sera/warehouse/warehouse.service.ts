import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy} from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';

import { WarehouseDto } from './dto/warehouse.dto';

@Injectable()
export class WarehouseService {
  
  constructor(
    @Inject('SERVICE_WAREHOUSE') private readonly warehouseProxy: ClientProxy 
  ) {}
  
  async createWarehouse( warehouseDto: WarehouseDto ) {
    const pattern = { cmd: 'createWarehouse' }
    return await this.warehouseProxy.send( pattern, warehouseDto );
  }

  async getAllWarehouses( pagination: PaginationDto ) {
    const pattern = { cmd: 'getAllWarehouses' }
    return await this.warehouseProxy.send( pattern, pagination );
  }

  async getWarehouseById( id: number ) {
    const pattern = { cmd: 'getWarehouseById' }
    return await this.warehouseProxy.send(pattern, id)
  }

  async updateWarehouse( idToUpdate: number, body: WarehouseDto ) {
    const pattern = { cmd: 'updateWarehouse' };
    const data = { idToUpdate, ...body };
    return await this.warehouseProxy.send( pattern, data );
  }
  
  async deleteWarehouse( id: number ) {
    const pattern = { cmd: 'deleteWarehouse' }
    return await this.warehouseProxy.send(pattern, id);
  }
}
