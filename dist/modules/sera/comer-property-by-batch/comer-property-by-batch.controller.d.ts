import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerPropertyByBatchService } from "./comer-property-by-batch.service";
import { ComerGoodsXLotDto } from "./dto/comer-property-by-batch.dto";
export declare class ComerPropertyByBatchController {
    private readonly service;
    constructor(service: ComerPropertyByBatchService);
    createComerEvent(comerEvent: ComerGoodsXLotDto): Promise<import("rxjs").Observable<any>>;
    getAllComerEvents(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerEventByAddress(comer: ComerGoodsXLotDto & PaginationDto): Promise<import("rxjs").Observable<any>>;
}
