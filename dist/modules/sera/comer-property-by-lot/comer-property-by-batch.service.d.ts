import { ClientProxy } from "@nestjs/microservices";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerGoodsXLotDto } from "./dto/comer-property-by-lot.dto";
export declare class ComerPropertyByBatchService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    createComerGoodXLot(comer: ComerGoodsXLotDto): Promise<import("rxjs").Observable<any>>;
    getAllComerGoodXLots(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerXLotByLotId(comer: ComerGoodsXLotDto & PaginationDto): Promise<import("rxjs").Observable<any>>;
}
