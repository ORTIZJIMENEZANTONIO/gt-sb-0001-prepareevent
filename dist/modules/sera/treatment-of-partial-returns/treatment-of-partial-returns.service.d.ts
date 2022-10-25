import { ClientProxy } from "@nestjs/microservices";
export declare class TreatmentOfPartialReturnsService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    treatmentOfPartialReturns(comer: any): Promise<import("rxjs").Observable<any>>;
}
