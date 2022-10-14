import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerClientDto } from "./dto/comer-client.dto.";
import { ComerClientService } from "./comer-client.service";
export declare class ComerClientController {
    private readonly service;
    constructor(service: ComerClientService);
    createComerClient(comer: ComerClientDto): Promise<import("rxjs").Observable<any>>;
    getAllComersClient(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
}
