import { ClientProxy } from "@nestjs/microservices";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventDto } from "./dto/comer-events.dto";
export declare class ComerEventsService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    createComerEvent(comerEvent: ComerEventDto): Promise<import("rxjs").Observable<any>>;
    getAllComerEvents(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerEventByAddress(address: string): Promise<import("rxjs").Observable<any>>;
}
