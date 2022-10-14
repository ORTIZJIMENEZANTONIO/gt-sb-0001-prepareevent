import { ClientProxy } from "@nestjs/microservices";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotsDto } from "./dto/comer-batch.dto";
export declare class ComerBatchService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    createComerLot(comerEvent: ComerLotsDto): Promise<import("rxjs").Observable<any>>;
    getAllComersLot(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
}
