import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerGoodsXLotDto } from "./dto/comer-property-by-lot.dto";

@Injectable()
export class ComerPropertyByBatchService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  async createComerGoodXLot(comer: ComerGoodsXLotDto) {
    const pattern = { cmd: "createComerGoodXLot" };
    return await this.proxy.send(pattern, comer);
  }

  async getAllComerGoodXLots(pagination: PaginationDto) {
    const pattern = { cmd: "getAllComerGoodXLots" };
    return await this.proxy.send(pattern, pagination);
  }

  async getComerXLotByLotId(comer: ComerGoodsXLotDto & PaginationDto) {
    const pattern = { cmd: "getComerXLotByLotId" };
    const data = { ...comer };
    return await this.proxy.send(pattern, data);
  }
}
