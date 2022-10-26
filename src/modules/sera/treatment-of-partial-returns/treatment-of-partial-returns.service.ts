import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";


@Injectable()
export class TreatmentOfPartialReturnsService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  async treatmentOfPartialReturns(comer: number) {
    const pattern = { cmd: "treatmentOfPartialReturns" };
    return this.proxy.send(pattern, comer);
  }
}
