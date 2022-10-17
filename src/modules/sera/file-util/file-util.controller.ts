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
import { query } from "express";

import { FileUtilService } from "./file-util.service";

@ApiCreatedResponse()
@Controller("file-util")
@ApiTags("file-util")
export class FileUtilController {
  constructor(private readonly service: FileUtilService) {}

  @Get()
  async createComerClient() {
    return await this.service.createXlsx();
  }

  @Get("third-file/:eventId/:fileName")
  async createThirdFile(
    @Param("eventId") eventId: number,
    @Param("fileName") fileName: string
  ) {
    return await this.service.createThirdFile(eventId, fileName);
  }

  @Post("/calculate-good-price")
  async calculateGoodPrice(@Body() params: { eventId: number; lotId: number }) {
    return await this.service.calculateGoodPrice(params);
  }
}
