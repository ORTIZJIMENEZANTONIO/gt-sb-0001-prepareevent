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

import { CurrentEventService } from "./current-event.service";
import { CurrentFilterDto } from "./dto/current-ifilter.dto";

@ApiCreatedResponse()
@Controller('current-event')
@ApiTags("current-event")
export class CurrentEventController {
  constructor(private readonly service: CurrentEventService ) {}

  @ApiOperation({ summary: "SERA.PA_REMESA_PREPXBIEN" })
  @ApiQuery({
    name: 'year',
    type: Number,
    description: "año",
  })
  @ApiQuery({
    name: 'month',
    type: Number,
    description: "mes",
  })
  @ApiResponse({
    status: 200,
    description: "Guarda Dirección",
    type: Array,
  })
  @Get('current')
  getCurrentEvents(@Query() params: CurrentFilterDto) {
    return this.service.getCurrentEvents(params);
  }

  @Get('in-progress')
  spEventsInProgress() {
    return this.service.spEventsInProgress({});
  }
}
