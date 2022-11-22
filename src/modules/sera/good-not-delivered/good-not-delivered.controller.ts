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

import { GoodNotDeliveredDto } from "./dto/good-not-delivered.dto";
import { GoodNotDeliveredService } from "./good-not-delivered.service";

@ApiCreatedResponse()
@Controller('good-not-delivered')
@ApiTags("good-not-delivered")
export class GoodNotDeliveredController {
  constructor(private readonly service: GoodNotDeliveredService) {}

  @ApiOperation({ summary: "Guardar nueva Direccióne" })
  @ApiBody({
    type: GoodNotDeliveredDto,
    description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: "Guarda Dirección",
    type: GoodNotDeliveredDto,
  })
  @Put()
  updateGoodNotDeliveredToTheCanceledLot(@Body() comer: GoodNotDeliveredDto) {
    return this.service.updateGoodNotDeliveredToTheCanceledLot(comer);
  }
}
