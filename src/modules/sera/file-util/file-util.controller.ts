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
}
