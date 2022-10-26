import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotsDto } from "./dto/comer-batch.dto";
import { ComerLotCanceledDto } from "./dto/comer-lot-canceled.dto";
@Injectable()
export class ComerBatchService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  async createComerLot(comer: ComerLotsDto) {
    const pattern = { cmd: "createComerLot" };
    return await this.proxy.send(pattern, comer);
  }

  async createComerLotCanceled(comer: ComerLotCanceledDto) {
    const pattern = { cmd: "createComerLotCanceled" };
    return await this.proxy.send(pattern, comer);
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
