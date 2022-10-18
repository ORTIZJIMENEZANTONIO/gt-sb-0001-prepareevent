import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  Res,
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

import { Readable } from "stream";
import { readFileSync } from "fs";
import { Response } from "express";

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

  @Post("/third-file")
  async createThirdFile(@Body() params: { eventId: number; fileName: string }) {
    return await this.service.createThirdFile(params.eventId, params.fileName);
  }

  @Post("/third-base-file")
  async createThirdBaseFile(
    @Body() params: { fileName: string, eventNumber: number, bankName: string }
  ) {
    return await this.service.createThirdBaseFile(
      params.fileName,
      params.eventNumber,
      params.bankName
    );
    /*

    if (fileData) {
      const buffer = readFileSync("file");

      const stream = new Readable();
      stream.push(buffer);
      stream.push(null);

      res.set({
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Length": buffer.length,
      });
      stream.pipe(res);
    }
    return { statusCode: 404,message: "Data not found" }
    */
  }

  @Post("/calculate-good-price")
  async calculateGoodPrice(@Body() params: { eventId: number; lotId: number }) {
    return await this.service.calculateGoodPrice(params);
  }
}
