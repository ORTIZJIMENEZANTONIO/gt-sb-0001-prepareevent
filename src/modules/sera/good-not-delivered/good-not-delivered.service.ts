import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { GoodNotDeliveredDto } from "./dto/good-not-delivered.dto";

@Injectable()
export class GoodNotDeliveredService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}
  
  updateGoodNotDeliveredToTheCanceledLot(comer: GoodNotDeliveredDto) {
    const pattern = { cmd: "updateGoodNotDeliveredToTheCanceledLot" };
    return this.proxy.send(pattern, comer);
  }
}
