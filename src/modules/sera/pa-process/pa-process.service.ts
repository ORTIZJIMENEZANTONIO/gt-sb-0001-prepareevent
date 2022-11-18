import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { ChangeStatusValidateDto } from "./dto/change-status-validate.dto";

import { PaRejectDto } from "./dto/reject.dto";
import { RemittancePrepByGoodDto } from "./dto/remmitance-prep-by-good.dto";

@Injectable()
export class PaProcessService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  async paReject(comer: PaRejectDto) {
    const pattern = { cmd: "paReject" };
    return await this.proxy.send(pattern, comer);
  }

  async paRemittancePrepByGood(params: RemittancePrepByGoodDto) {
    const pattern = { cmd: "paRemittancePrepByGood" };
    return await this.proxy.send(pattern, params);
  }

  async paChangeStatusValidate(params: ChangeStatusValidateDto)  {
    const pattern = { cmd: "paChangeStatusValidate" };
    //console.log(params)
    return await this.proxy.send(pattern, params);
  }
}
