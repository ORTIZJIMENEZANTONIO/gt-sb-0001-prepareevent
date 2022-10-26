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
import { ComerBatchService } from "./comer-batch.service";
import { ComerLotsDto } from "./dto/comer-batch.dto";
import { ComerLotCanceledDto } from "./dto/comer-lot-canceled.dto";

@ApiCreatedResponse()
@Controller('comer-batch')
@ApiTags("comer-batch")
export class ComerBatchController {
  constructor(private readonly service: ComerBatchService) {}

  @ApiOperation({ summary: "Guardar nueva Direccióne" })
  @ApiBody({
    type: ComerLotsDto,
    description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: "Guarda Dirección",
    type: ComerLotsDto,
  })
  @Post()
  async createComerLot(@Body() comer: ComerLotsDto) {
    return await this.service.createComerLot(comer);
  }

  @ApiOperation({ summary: "CREAR LOTE CANCELADO CON EL BIEN VIEJO" })
  @ApiBody({
    type: ComerLotCanceledDto,
    description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: "Guarda Dirección",
    type: ComerLotCanceledDto,
  })
  @Post("/lot-canceled")
  async createComerLotCanceled(@Body() comer: ComerLotCanceledDto) {
    return await this.service.createComerLotCanceled(comer);
  }

  @ApiOperation({ summary: "Obtener lista de todas las almacenes" })
  @ApiResponse({
    status: 200,
    description: "Lista de Direcciónes existenetes",
    type: ComerLotsDto,
  })
  @Get()
  async getAllComersLot(@Query() pagination: PaginationDto) {
    return await this.service.getAllComersLot(pagination);
  }

  @ApiOperation({ summary: "Obtener lista de todas las almacenes" })
  @ApiQuery({
    name: "eventId",
    type: Number,
    description: "Id del evento",
  })
  @ApiQuery({
    name: "inicio",
    type: Number,
    required: false,
    description: "inicio",
  })
  @ApiQuery({
    name: "pageSize",
    type: Number,
    required: false,
    description: "Size",
  })
  @ApiResponse({
    status: 200,
    description: "Lista de Direcciónes existenetes",
    type: ComerLotsDto,
  })
  @Get("/by-event-id")
  async getComerLotByEventId(@Query() comer: ComerLotsDto & PaginationDto) {
    return await this.service.getComerLotByEventId(comer);
  }
}
