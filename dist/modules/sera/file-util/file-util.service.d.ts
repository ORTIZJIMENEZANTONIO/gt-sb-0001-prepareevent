import { ClientProxy } from "@nestjs/microservices";
export declare class FileUtilService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    createXlsx(): Promise<import("rxjs").Observable<any>>;
}
