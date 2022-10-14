import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerRejectedGoodDto } from "./dto/comer-rejected-property.dto";

@Injectable()
export class ComerRejectedPropertyService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  async createComerRejectedProperty(comerEvent: ComerRejectedGoodDto) {
    const pattern = { cmd: "createComerRejectedProperty" };
    return await this.proxy.send(pattern, comerEvent);
  }

  async getAllComersRejectedProperties(pagination: PaginationDto) {
    const pattern = { cmd: "getAllComersRejectedProperties" };
    return await this.proxy.send(pattern, pagination);
  }
}
