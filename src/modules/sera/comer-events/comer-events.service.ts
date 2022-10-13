import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerBatchDto } from "../comer-batch/dto/comer-batch.dto";
import { ComerEventDto } from "./dto/comer-events.dto";

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

  async getComerEventByAddress(comer: ComerEventDto & PaginationDto) {
    const pattern = { cmd: "getComerEventByAddress" };
    const data = { ...comer };
    return await this.proxy.send(pattern, data);
  }

  async getComerEventByAddressAndId(comerEvent: ComerEventDto) {
    const pattern = { cmd: "getComerEventByAddressAndId" };
    const data = { ...comerEvent }
    return await this.proxy.send(pattern, data);
  }

  async getComerEventByTpEvent( comerEvent: ComerEventDto & ComerBatchDto & PaginationDto) {
    const pattern = { cmd: "getComerEventByTpEvent" };
    const data = { ...comerEvent }
    return await this.proxy.send(pattern, data);
  }
}
