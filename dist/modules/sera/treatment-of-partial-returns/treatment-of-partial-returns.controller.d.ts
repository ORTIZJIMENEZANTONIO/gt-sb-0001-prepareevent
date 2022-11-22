import { TreatmentOfPartialReturnsService } from "./treatment-of-partial-returns.service";
export declare class TreatmentOfPartialReturnsController {
    private readonly service;
    constructor(service: TreatmentOfPartialReturnsService);
    treatmentOfPartialReturns(body: {
        goodNumber: number;
    }): Promise<import("rxjs").Observable<any>>;
}
