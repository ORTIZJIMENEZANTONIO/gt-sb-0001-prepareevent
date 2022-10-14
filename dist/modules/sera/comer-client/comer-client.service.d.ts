import { ClientProxy } from "@nestjs/microservices";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerClientDto } from "./dto/comer-client.dto.";
export declare class ComerClientService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    createComerClient(comer: ComerClientDto): Promise<import("rxjs").Observable<any>>;
    getAllComersClient(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
}
