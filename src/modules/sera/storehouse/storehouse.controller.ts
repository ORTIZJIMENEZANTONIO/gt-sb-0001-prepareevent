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

import { StorehouseService } from './storehouse.service';
import { StorehouseDto } from './dto/storehouse.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';

@ApiCreatedResponse()
@Controller('storehouse')
@ApiTags('storehouse')
export class StorehouseController {

  constructor(
    private readonly storehouseService: StorehouseService
  ) {}
  
  @ApiOperation({ summary: 'Guardar nueva almacéne' }) 
  @ApiBody({
    type: StorehouseDto,
    description: 'Información de la bodega a guardar'
  })
  @ApiResponse({ 
    status: 200,
    description: 'Guarda evento en el repositorio de bodega',
    type: StorehouseDto, 
  }) 
  @Post( )
  async createstorehouse( @Body() storehouseDto: StorehouseDto ) {   
    return await this.storehouseService.createStorehouse( storehouseDto );
  }

  @ApiOperation({ summary: 'Obtener lista de todas las bodega' }) 
  @ApiResponse({ 
    status: 200,
    description: 'Lista de bodegas existenetes',
    type: StorehouseDto, 
  })
  @Get()
  async getAllstorehouses( @Query() pagination: PaginationDto ) {
    return await this.storehouseService.getAllStorehouses( pagination );
  }

  @ApiOperation({ summary: 'Obtener bodega por su id' }) 
  @ApiParam({
    name: 'id',
    description: 'Identificador de la bodega'
  })
  @ApiResponse({ 
    status: 200,
    description: 'Bodega por su identificador',
    type: StorehouseDto,
  })
  @Get(":id")
  async getstorehouseById( @Param("id") id: string ) {
    return await this.storehouseService.getStorehouseById( id );
  }

  @ApiOperation({ summary: 'Modificar bodega' }) 
  @ApiParam({
    name: 'id',
    description: 'Identificador numérico de la bodega'
  })
  @ApiBody({
    type: StorehouseDto,
    description: 'Objeto de la bodega a modificar'
  })
  @Put(":id")
  async updatestorehouse( @Param("id")idToUpdate: string , @Body() data: StorehouseDto ) {
    return await this.storehouseService.updateStorehouse( idToUpdate , data );
  }

  @ApiOperation({ summary: 'Borrar bodega por su id' }) 
  @ApiParam({
    name: 'id',
    description: 'Identificador de la bodega a borrar'
  }) 
  @ApiResponse({ 
    status: 200,
    description: 'Borrar bodega por su identificador',
    type: StorehouseDto,
  })
  @Delete(":id")
  async deletestorehouse( @Param("id") id: string ) {
    return await this.storehouseService.deleteStorehouse( id );
  }

}
