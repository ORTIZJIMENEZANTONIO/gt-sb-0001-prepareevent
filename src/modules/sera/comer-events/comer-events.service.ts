import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventDto } from "./dto/comer-events.dto";
import { UpdateComerEventDto } from "./dto/update-comer-events.entity";

@Injectable()
export class ComerEventsService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  async createComerEvent(comerEvent: ComerEventDto) {
    const pattern = { cmd: "createComerEvent" };
    return await this.proxy.send(pattern, comerEvent);
  }

  async getAllComerEvents(pagination: PaginationDto) {
    const pattern = { cmd: "getAllComerEvents" };
    return await this.proxy.send(pattern, pagination);
  }

  async getComerEventByAddress(address: string) {
    const pattern = { cmd: "getComerEventByAddress" };
    return await this.proxy.send(pattern, address);
  }
}
