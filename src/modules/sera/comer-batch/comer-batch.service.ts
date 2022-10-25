import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotsDto } from "./dto/comer-batch.dto";
@Injectable()
export class ComerBatchService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  async createComerLot(comerEvent: ComerLotsDto) {
    const pattern = { cmd: "createComerLot" };
    return await this.proxy.send(pattern, comerEvent);
  }

  async getAllComersLot(pagination: PaginationDto) {
    const pattern = { cmd: "getAllComersLot" };
    return await this.proxy.send(pattern, pagination);
  }

  async getComerLotByEventId(comer: ComerLotsDto & PaginationDto) {
    const pattern = { cmd: "getComerLotByEventId" };
    return await this.proxy.send(pattern, comer);
  }

}
