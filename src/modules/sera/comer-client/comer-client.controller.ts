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
import { ComerClientDto } from "./dto/comer-client.dto.";
import { ComerClientService } from "./comer-client.service";

@ApiCreatedResponse()
@Controller("comer-client")
@ApiTags("comer-client")
export class ComerClientController {
  constructor(private readonly service: ComerClientService) {}

  @ApiOperation({ summary: "Guardar nueva Direccióne" })
  @ApiBody({
    type: ComerClientDto,
    description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: "Guarda Dirección",
    type: ComerClientDto,
  })
  @Post()
  async createComerClient(@Body() comer: ComerClientDto) {
    return await this.service.createComerClient(comer);
  }

  @ApiOperation({ summary: "Obtener lista de todas las almacenes" })
  @ApiResponse({
    status: 200,
    description: "Lista de Direcciónes existenetes",
    type: ComerClientDto,
  })
  @Get()
  async getAllComersClient(@Query() pagination: PaginationDto) {
    return await this.service.getAllComersClient(pagination);
  }
}
