import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerBatchService } from "./comer-batch.service";
import { ComerLotDto } from "./dto/comer-lot.dto";
import { ComerLotCanceledDto } from "./dto/comer-lot-canceled.dto";
export declare class ComerBatchController {
    private readonly service;
    constructor(service: ComerBatchService);
    createComerLot(comer: ComerLotDto): Promise<import("rxjs").Observable<any>>;
    createComerLotCanceled(comer: ComerLotCanceledDto): Promise<import("rxjs").Observable<any>>;
    getAllComersLot(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerLotByEventId(comer: ComerLotDto & PaginationDto): Promise<import("rxjs").Observable<any>>;
}
