import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { MandateFunctionDto } from "./dto/mandate-function.dto";

@Injectable()
export class MandateFunctionService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  async updateMandate( params: MandateFunctionDto) {
    const pattern = { cmd: "updateMandate" };
    return await this.proxy.send(pattern, params);
  }   
}
