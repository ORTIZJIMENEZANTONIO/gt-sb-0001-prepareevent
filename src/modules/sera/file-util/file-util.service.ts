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

  async createThirdFile( eventId: number, fileName: string) {
    const pattern = { cmd: "createThirdFile" };
    return await this.proxy.send(pattern, {eventId, fileName});
  }

  async calculateGoodPrice( params: { eventId: number; lotId: number }) {
    const pattern = { cmd: "calculateGoodPrice" };
    return await this.proxy.send(pattern, params);
  }
}
