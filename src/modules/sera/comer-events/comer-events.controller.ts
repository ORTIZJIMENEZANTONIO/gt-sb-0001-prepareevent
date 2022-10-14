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
import { ComerEventDto } from "./dto/comer-events.dto";
import { ComerLotsDto } from "../comer-batch/dto/comer-batch.dto";
import { ComerEventsService } from "./comer-events.service";
import { UpdateComerEventDto } from "./dto/update-comer-events.entity";

@ApiCreatedResponse()
@Controller("comer-events")
@ApiTags("comer-events")
export class ComerEventsController {
  constructor(private readonly service: ComerEventsService) {}

  @ApiOperation({ summary: "Guardar nueva Direccióne" })
  @ApiBody({
    type: ComerEventDto,
    description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: "Guarda Dirección",
    type: ComerEventDto,
  })
  @Post()
  async createComerEvent(@Body() comerEvent: ComerEventDto) {
    return await this.service.createComerEvent(comerEvent);
  }

  @ApiOperation({ summary: "Obtener lista de todas las almacenes" })
  @ApiResponse({
    status: 200,
    description: "Lista de Direcciónes existenetes",
    type: ComerEventDto,
  })
  @Get()
  async getAllComerEvents(@Query() pagination: PaginationDto) {
    return await this.service.getAllComerEvents(pagination);
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
    type: ComerEventDto,
  })
  @Get("address")
  async getComerEventByAddress(@Query() comer: ComerEventDto & PaginationDto) {
    return await this.service.getComerEventByAddress(comer);
  }

  @ApiOperation({ summary: "Obtener eventos por su dirección y id" })
  @ApiQuery({
    name: "address",
    type: String,
    description: "Dirección",
  })
  @ApiQuery({
    name: "eventId",
    type: String,
    description: "Id del Evento",
  })
  @ApiResponse({
    status: 200,
    description: "Evento",
    type: ComerEventDto,
  })
  @Get("adress-and-eventid")
  async getComerEventByAddressAndId(@Query() comer: UpdateComerEventDto) {
    return await this.service.getComerEventByAddressAndId(comer);
  }

  @ApiOperation({ summary: "Obtener eventos por eventTpId" })
  @ApiBody({
    type: ComerEventDto,
    description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: "Dirección obtenida por su identificador",
    type: ComerEventDto,
  })
  @Post("/tp-event-amd-not-sold")
  async getComerEventByTpEvent(
    @Body() comerEvent: ComerEventDto & ComerLotsDto & PaginationDto
  ) {
    return await this.service.getComerEventByTpEvent(comerEvent);
  }
}
