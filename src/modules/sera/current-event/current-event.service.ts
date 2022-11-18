import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CurrentFilterDto } from "./dto/current-ifilter.dto";

@Injectable()
export class CurrentEventService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  getCurrentEvents(params: CurrentFilterDto) {
    const pattern = { cmd: "getCurrentEvents" };
    //  console.log(params)
    return this.proxy.send(pattern, params);
  }

  spEventsInProgress(params: {}) {
    const pattern = { cmd: "spEventsInProgress" };
    //  console.log(params)
    return this.proxy.send(pattern, params);
  }
}
