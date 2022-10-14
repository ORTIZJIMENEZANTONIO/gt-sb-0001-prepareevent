import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class FileUtilService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  async createXlsx( ) {
    const pattern = { cmd: "createXlsx" };
    return await this.proxy.send(pattern, {});
  }
}
