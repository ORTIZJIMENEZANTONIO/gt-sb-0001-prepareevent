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

import { PartialPropertyDelivered } from "./dto/partial-property-delivered.dto";
import { PartialPropertyDeliveredService } from "./partial-property-delivered.service";

@ApiCreatedResponse()
@Controller('partial-property-delivered')
@ApiTags("partial-property-delivered")
export class PartialPropertyDeliveredController {
  constructor(private readonly service: PartialPropertyDeliveredService) {}

  @ApiOperation({ summary: "Guardar nueva Direccióne" })
  @ApiBody({
    type: PartialPropertyDelivered,
    description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: "Guarda Dirección",
    type: PartialPropertyDelivered,
  })
  @Post()
  async createComerLot(@Body() comer: PartialPropertyDelivered) {
    return await this.service.createNewPartialGood(comer);
  }
}
