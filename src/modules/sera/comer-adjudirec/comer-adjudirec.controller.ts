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
import { ComerAdjudirecService } from "./comer-adjudirec.service";
import { ComerAdjudirecDto } from "./dto/comer-adjudirec.dto";

@ApiCreatedResponse()
@Controller('comer-adjudirec')
@ApiTags("comer-adjudirec")
export class ComerAdjudirecController {
  constructor(private readonly service: ComerAdjudirecService) {}

  @ApiOperation({ summary: "Guardar nueva Direccióne" })
  @ApiBody({
    type: ComerAdjudirecDto,
    description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: "Guarda Dirección",
    type: ComerAdjudirecDto,
  })
  @Post()
  async createComerAdjudirec(@Body() comer: ComerAdjudirecDto) {
    return await this.service.createComerAdjudirec(comer);
  }

  @ApiOperation({ summary: "Obtener lista de todas las almacenes" })
  @ApiResponse({
    status: 200,
    description: "Lista de Direcciónes existenetes",
    type: ComerAdjudirecDto,
  })
  @Get()
  async getAllComersAdjudirec(@Query() pagination: PaginationDto) {
    return await this.service.getAllComersAdjudirec(pagination);
  }
}
