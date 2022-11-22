import { ClientProxy } from "@nestjs/microservices";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotsDto } from "./dto/comer-batch.dto";
import { ComerLotCanceledDto } from "./dto/comer-lot-canceled.dto";
export declare class ComerBatchService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    createComerLot(comer: ComerLotsDto): Promise<import("rxjs").Observable<any>>;
    createComerLotCanceled(comer: ComerLotCanceledDto): Promise<import("rxjs").Observable<any>>;
    getAllComersLot(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerLotByEventId(comer: ComerLotsDto & PaginationDto): Promise<import("rxjs").Observable<any>>;
}
