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

import { SentenceDispersionDto } from "./dto/sentence-dispersion.dto";
import { ComerSentenceDispersionService } from "./comer-sentence-dispersion.service";
@Controller("comer-sentence-dispersion")
export class ComerSentenceDispersionController {
  constructor(private readonly service: ComerSentenceDispersionService) {}

  @ApiOperation({ summary: "Setear Sentencia" })
  @ApiBody({
    type: SentenceDispersionDto,
    description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: "Guarda Dirección",
    type: SentenceDispersionDto,
  })
  @Post()
  async setSentenceDispersio(@Body() params: SentenceDispersionDto) {
    return await this.service.setSentenceDispersion(params);
  }
}
