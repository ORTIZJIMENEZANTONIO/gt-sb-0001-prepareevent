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
import { ComerAgreementEventsService } from "./comer-agreement-events.service";
import { ComerConvEventDto } from "./dto/comer-agreement-events.dto";

@ApiCreatedResponse()
@Controller("comer-agreement-events")
@ApiTags("comer-agreement-events")
export class ComerAgreementEventsController {
  constructor(private readonly service: ComerAgreementEventsService) {}

  @ApiOperation({ summary: "Guardar nueva Direccióne" })
  @ApiBody({
    type: ComerConvEventDto,
    description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: "Guarda Dirección",
    type: ComerConvEventDto,
  })
  @Post()
  async createComerEvent(@Body() comerEvent: ComerConvEventDto) {
    return await this.service.createComerConvEvent(comerEvent);
  }

  @ApiOperation({ summary: "Obtener lista de todas las almacenes" })
  @ApiResponse({
    status: 200,
    description: "Lista de Direcciónes existenetes",
    type: ComerConvEventDto,
  })
  @Get()
  async getAllComerEvents(@Query() pagination: PaginationDto) {
    return await this.service.getAllComerConvEvents(pagination);
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
    type: ComerConvEventDto,
  })
  @Get("/by-id")
  async getComerConvEventById(@Query() comerconvEvent: ComerConvEventDto) {
    return await this.service.getComerConvEventById(comerconvEvent);
  }
}
