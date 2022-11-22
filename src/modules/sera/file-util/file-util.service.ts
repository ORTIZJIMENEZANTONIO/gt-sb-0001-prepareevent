import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class FileUtilService {
  constructor(
    @Inject("SERVICE_PREPAREEVENT") private readonly proxy: ClientProxy
  ) {}

  async createThirdFile(eventId: Number, fileName: String) {
    const pattern = { cmd: "createThirdFile" };
    return await this.proxy.send(pattern, { eventId, fileName });
  }

  async createThirdBaseFile(
    fileName: string,
    eventNumber: number,
    bankName: string
  ) {
    const pattern = { cmd: "createThirdBaseFile" };
    return await this.proxy.send(pattern, { fileName, eventNumber, bankName });
  }

  async calculateGoodPrice(params: { eventId: number; lotId: number }) {
    const pattern = { cmd: "calculateGoodPrice" };
    return await this.proxy.send(pattern, params);
  }
}
