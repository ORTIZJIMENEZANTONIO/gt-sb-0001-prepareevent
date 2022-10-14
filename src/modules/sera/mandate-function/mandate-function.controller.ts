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

import { MandateFunctionDto } from "./dto/mandate-function.dto";
import { MandateFunctionService } from "./mandate-function.service";

@ApiCreatedResponse()
@Controller("mandate-function")
@ApiTags("mandate-function")
export class MandateFunctionController {
  constructor(private readonly service: MandateFunctionService) {}

  @ApiOperation({ summary: "Obtener lista de todas las almacenes" })
  @ApiBody({
    type: MandateFunctionDto,
    description: 'Objeto del tipo'
  })
  @ApiResponse({
    status: 200,
    description: "Lista de Direcciónes existenetes",
    type: MandateFunctionDto,
  })
  @Put()
  async updateMandate(@Body() data: MandateFunctionDto) {
    return await this.service.updateMandate(data);
  }
}
