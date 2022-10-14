import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerClientDto } from "./dto/comer-client.dto.";

@Injectable()
export class ComerClientService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  async createComerClient(comer: ComerClientDto) {
    const pattern = { cmd: "createComerClient" };
    return await this.proxy.send(pattern, comer);
  }

  async getAllComersClient(pagination: PaginationDto) {
    const pattern = { cmd: "getAllComersClient" };
    return await this.proxy.send(pattern, pagination);
  }

}
