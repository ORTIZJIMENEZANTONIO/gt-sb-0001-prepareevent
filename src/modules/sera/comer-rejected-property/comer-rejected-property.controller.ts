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
import { ComerRejectedPropertyService } from "./comer-rejected-property.service";
import { ComerRejectedGoodDto } from "./dto/comer-rejected-property.dto";
@Controller('comer-rejected-property')
export class ComerRejectedPropertyController {
  constructor(private readonly service: ComerRejectedPropertyService) {}

  @ApiOperation({ summary: "Guardar nueva Direccióne" })
  @ApiBody({
    type: ComerRejectedGoodDto,
    description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: "Guarda Dirección",
    type: ComerRejectedGoodDto,
  })
  @Post()
  async createComerRejectedProperty(@Body() comerEvent: ComerRejectedGoodDto) {
    return await this.service.createComerRejectedProperty(comerEvent);
  }

  @ApiOperation({ summary: "Obtener lista de todas las almacenes" })
  @ApiResponse({
    status: 200,
    description: "Lista de Direcciónes existenetes",
    type: ComerRejectedGoodDto,
  })
  @Get()
  async getAllComersRejectedProperties(@Query() pagination: PaginationDto) {
    return await this.service.getAllComersRejectedProperties(pagination);
  }
}
