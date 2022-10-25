import { PaginationDto } from "src/shared/dto/pagination.dto";
import { TreatmentOfPartialReturnsService } from "./treatment-of-partial-returns.service";
export declare class TreatmentOfPartialReturnsController {
    private readonly service;
    constructor(service: TreatmentOfPartialReturnsService);
    treatmentOfPartialReturns(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
}
