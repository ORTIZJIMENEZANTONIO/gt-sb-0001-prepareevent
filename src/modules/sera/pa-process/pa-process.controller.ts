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

import { ChangeStatusValidateDto } from "./dto/change-status-validate.dto";
import { PaRejectDto } from "./dto/reject.dto";
import { RemittancePrepByGoodDto } from "./dto/remmitance-prep-by-good.dto";
import { PaProcessService } from "./pa-process.service";

@ApiCreatedResponse()
@Controller('pa-process')
@ApiTags("pa-process")
export class PaProcessController {
  constructor(private readonly service: PaProcessService) {}

  @ApiOperation({ summary: "Guardar nueva Direccióne" })
  @ApiBody({
    type: PaRejectDto,
    description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: "Guarda Dirección",
    type: PaRejectDto,
  })
  @Post('/pa-reject')
  async paReject(@Body() comer: PaRejectDto) {
    return await this.service.paReject(comer);
  }

  @ApiOperation({ summary: "SERA.PA_REMESA_PREPXBIEN" })
  @ApiBody({
    type: RemittancePrepByGoodDto,
    description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: "Guarda Dirección",
    type: RemittancePrepByGoodDto,
  })
  @Post('/pa-remittance-prep-by-good')
  async paRemittancePrepByGood(@Body() comer: RemittancePrepByGoodDto) {
    return await this.service.paRemittancePrepByGood(comer);
  }

  @ApiOperation({ summary: "SERA.PA_REMESA_PREPXBIEN" })
  @ApiBody({
    type: RemittancePrepByGoodDto,
    description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: "Guarda Dirección",
    type: RemittancePrepByGoodDto,
  })
  @Post('/pa-change-status-validate')
  async paChangeStatusValidate(@Body() comer: ChangeStatusValidateDto) {
    return await this.service.paChangeStatusValidate(comer);
  }
}
