import { ClientProxy } from "@nestjs/microservices";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerRejectedGoodDto } from "./dto/comer-rejected-property.dto";
export declare class ComerRejectedPropertyService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    createComerRejectedProperty(comerEvent: ComerRejectedGoodDto): Promise<import("rxjs").Observable<any>>;
    getAllComersRejectedProperties(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
}
