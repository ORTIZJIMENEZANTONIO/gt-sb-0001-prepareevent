import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerRejectedPropertyService } from "./comer-rejected-property.service";
import { ComerRejectedGoodDto } from "./dto/comer-rejected-property.dto";
export declare class ComerRejectedPropertyController {
    private readonly service;
    constructor(service: ComerRejectedPropertyService);
    createComerRejectedProperty(comerEvent: ComerRejectedGoodDto): Promise<import("rxjs").Observable<any>>;
    getAllComersRejectedProperties(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerRejectedPropertyByEventId(comer: PaginationDto & ComerRejectedGoodDto): Promise<import("rxjs").Observable<any>>;
}
