import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerAdjudirecDto } from "./dto/comer-adjudirec.dto";

@Injectable()
export class ComerAdjudirecService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  async createComerAdjudirec(comer: ComerAdjudirecDto) {
    const pattern = { cmd: "createComerAdjudirec" };
    return await this.proxy.send(pattern, comer);
  }

  async getAllComersAdjudirec(pagination: PaginationDto) {
    const pattern = { cmd: "getAllComersAdjudirec" };
    return await this.proxy.send(pattern, pagination);
  }

  async deleteComerAdjudirec(comer: ComerAdjudirecDto) {
    const pattern = { cmd: "deleteComerAdjudirec" };
    return await this.proxy.send(pattern, comer);
  }
}
