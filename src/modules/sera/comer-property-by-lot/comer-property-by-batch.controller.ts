import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from "@nestjs/common";
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiCreatedResponse,
  ApiParam,
  ApiBody,
  ApiQuery,
} from "@nestjs/swagger";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerPropertyByBatchService } from "./comer-property-by-batch.service";
import { ComerGoodsXLotDto } from "./dto/comer-property-by-lot.dto";

@ApiCreatedResponse()
@Controller("comer-property-by-batch")
@ApiTags("comer-property-by-batch")
export class ComerPropertyByBatchController {
  constructor(private readonly service: ComerPropertyByBatchService) {}

  @ApiOperation({ summary: "Guardar nuevo comer bienes x lote" })
  @ApiBody({
    type: ComerGoodsXLotDto,
    description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: "Guarda Dirección",
    type: ComerGoodsXLotDto,
  })
  @Post()
  async createComerEvent(@Body() comerEvent: ComerGoodsXLotDto) {
    return await this.service.createComerGoodXLot(comerEvent);
  }

  @ApiOperation({ summary: "Obtener lista de todas las almacenes" })
  @ApiResponse({
    status: 200,
    description: "Lista de Direcciónes existenetes",
    type: ComerGoodsXLotDto,
  })
  @Get()
  async getAllComerEvents(@Query() pagination: PaginationDto) {
    return await this.service.getAllComerGoodXLots(pagination);
  }

  @ApiOperation({ summary: "Obtener Dirección por su dirección" })
  @ApiQuery({
    name: "address",
    type: String,
    description: "Dirección",
  })
  @ApiResponse({
    status: 200,
    description: "Dirección obtenida por su identificador",
    type: ComerGoodsXLotDto,
  })
  @Get("/lot-id")
  async getComerEventByAddress(@Query() comer: ComerGoodsXLotDto & PaginationDto) {
    return await this.service.getComerXLotByLotId(comer);
  }
}
