import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerBatchService } from "./comer-batch.service";
import { ComerLotsDto } from "./dto/comer-batch.dto";
export declare class ComerBatchController {
    private readonly service;
    constructor(service: ComerBatchService);
    createComerLot(comer: ComerLotsDto): Promise<import("rxjs").Observable<any>>;
    getAllComersLot(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
}
