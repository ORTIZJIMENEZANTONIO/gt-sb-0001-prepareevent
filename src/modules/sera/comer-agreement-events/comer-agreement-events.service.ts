import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerConvEventDto } from "./dto/comer-agreement-events.dto";

@Injectable()
export class ComerAgreementEventsService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  async createComerConvEvent(comerEvent: ComerConvEventDto) {
    const pattern = { cmd: "createComerConvEvent" };
    return await this.proxy.send(pattern, comerEvent);
  }

  async getAllComerConvEvents(pagination: PaginationDto) {
    const pattern = { cmd: "getAllComerConvEvents" };
    return await this.proxy.send(pattern, pagination);
  }

  async getComerConvEventById({eventId}: ComerConvEventDto) {
    const pattern = { cmd: "getComerConvEventById" };
    const data = { eventId };
    return await this.proxy.send(pattern, data);
  }
}
