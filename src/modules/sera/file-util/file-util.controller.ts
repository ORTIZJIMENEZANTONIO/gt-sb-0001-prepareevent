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

import { FileUtilService } from "./file-util.service";
import { ThirdFileDto } from "./dto/third-file.dto";
import { GoodPriceDto } from "./dto/good-price.dto";
import { ThirdBaseFileDto } from "./dto/third-base-file.dto";

@ApiCreatedResponse()
@Controller("file-util")
@ApiTags("file-util")
export class FileUtilController {
  constructor(private readonly service: FileUtilService) {}

  @ApiOperation({ summary: "Obtiene archivo excel" })
  @ApiBody({
    type: ThirdFileDto,
    description: "createThirdFile",
  })
  @ApiResponse({
    status: 200,
    description: "Retorna path del archivo",
  })
  @Post("/third-file")
  async createThirdFile(@Body() params: ThirdFileDto) {
    return await this.service.createThirdFile(params.eventId, params.fileName);
  }

  @ApiOperation({ summary: "Obtiene archivo excel" })
  @ApiBody({
    type: ThirdBaseFileDto,
    description: "createThirdBaseFile",
  })
  @ApiResponse({
    status: 200,
    description: "Retorna path del archivo",
  })
  @Post("/third-base-file")
  async createThirdBaseFile(@Body() params: ThirdBaseFileDto) {
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

  @ApiOperation({ summary: "Obtiene archivo excel con precio de bienes" })
  @ApiBody({
    type: GoodPriceDto,
    description: "calculateGoodPrice",
  })
  @ApiResponse({
    status: 200,
    description: "Retorna path del archivo",
  })
  @Post("/calculate-good-price")
  async calculateGoodPrice(@Body() params: GoodPriceDto) {
    return await this.service.calculateGoodPrice(params);
  }
}
