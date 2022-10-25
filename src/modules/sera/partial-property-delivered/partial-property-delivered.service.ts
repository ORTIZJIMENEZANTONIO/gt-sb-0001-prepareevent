import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { PartialPropertyDelivered } from "./dto/partial-property-delivered.dto";

@Injectable()
export class PartialPropertyDeliveredService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  async createNewPartialGood(comer: PartialPropertyDelivered) {
    const pattern = { cmd: "createNewPartialGood" };
    return await this.proxy.send(pattern, comer);
  }
}
