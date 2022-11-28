import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { SentenceDispersionDto } from "./dto/sentence-dispersion.dto";

@Injectable()
export class ComerSentenceDispersionService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  async setSentenceDispersion(params: SentenceDispersionDto) {
    const pattern = { cmd: "setSentenceDispersion" };
    console.log(await this.proxy.send(pattern, params))
    return await this.proxy.send(pattern, params);
  }
}
