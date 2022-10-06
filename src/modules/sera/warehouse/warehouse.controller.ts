import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Body, 
  Param,
  Query,
} from '@nestjs/common';
import { 
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiCreatedResponse,
  ApiParam,
  ApiBody
} from '@nestjs/swagger';

import { WarehouseService } from './warehouse.service';
import { WarehouseDto } from './dto/warehouse.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';

@ApiCreatedResponse()
@Controller('warehouse')
@ApiTags('warehouse')
export class WarehouseController {

  constructor(
    private readonly warehouseService: WarehouseService
  ) {}
  
  @ApiOperation({ summary: 'Guardar nueva almacéne' }) 
  @ApiBody({
    type: WarehouseDto,
    description: 'Información de la almacén a guardar'
  })
  @ApiResponse({ 
    status: 200,
    description: 'Guarda almacén',
    type: WarehouseDto, 
  }) 
  @Post()
  async createWarehouse( @Body() warehouseDto: WarehouseDto ) {  
    return await this.warehouseService.createWarehouse( warehouseDto );
  }

  @ApiOperation({ summary: 'Obtener lista de todas las almacenes' }) 
  @ApiResponse({ 
    status: 200,
    description: 'Lista de almacénes existenetes',
    type: WarehouseDto, 
  })
  @Get()
  async getAllWarehouses( @Query() pagination: PaginationDto ) {
    return await this.warehouseService.getAllWarehouses( pagination );
  }

  @ApiOperation({ summary: 'Obtener almacén por su id' }) 
  @ApiParam({
    name: 'id',
    description: 'Identificador de la almacén'
  })
  @ApiResponse({ 
    status: 200,
    description: 'Almacén obtenida por su identificador',
    type: WarehouseDto,
  })
  @Get(":id")
  async getWarehouseById( @Param("id") id: number ) {
    return await this.warehouseService.getWarehouseById( id );
  }

  @ApiOperation({ summary: 'Modificar almacén' }) 
  @ApiParam({
    name: 'id',
    description: 'Identificador numérico de la almacén'
  })
  @ApiBody({
    type: WarehouseDto,
    description: 'Objeto de la almacén a modificar'
  })
  @Put(":id")
  async updateWarehouse( @Param("id") id: number, @Body() regionalData: WarehouseDto ) {
    return await this.warehouseService.updateWarehouse( id, regionalData );
  }

  @ApiOperation({ summary: 'Borrar almacén por su id' }) 
  @ApiParam({
    name: 'id',
    description: 'Identificador de la almacén a borrar'
  }) 
  @ApiResponse({ 
    status: 200,
    description: 'Borrar almacén por su identificador',
    type: WarehouseDto,
  })
  @Delete(":id")
  async deleteWarehouse( @Param("id") id: number ) {
    return await this.warehouseService.deleteWarehouse( id );
  }

}
