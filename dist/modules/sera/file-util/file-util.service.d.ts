import { ClientProxy } from "@nestjs/microservices";
export declare class FileUtilService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    createThirdFile(eventId: Number, fileName: String): Promise<import("rxjs").Observable<any>>;
    createThirdBaseFile(fileName: string, eventNumber: number, bankName: string): Promise<import("rxjs").Observable<any>>;
    calculateGoodPrice(params: {
        eventId: number;
        lotId: number;
    }): Promise<import("rxjs").Observable<any>>;
}
