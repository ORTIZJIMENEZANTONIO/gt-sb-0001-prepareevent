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
import { TreatmentOfPartialReturnsService } from "./treatment-of-partial-returns.service";

@ApiCreatedResponse()
@Controller('treatment-of-partial-returns')
@ApiTags("treatment-of-partial-returns")
export class TreatmentOfPartialReturnsController {
  constructor(private readonly service: TreatmentOfPartialReturnsService) {}

  @Post()
  async treatmentOfPartialReturns(@Body() pagination: PaginationDto) {
    return await this.service.treatmentOfPartialReturns(pagination);
  }
}
