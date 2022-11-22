import { ClientProxy } from "@nestjs/microservices";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotDto } from "../comer-lot/dto/comer-lot.dto";
import { ComerEventDto } from "./dto/comer-events.dto";
import { UpdateComerEventDto } from "./dto/update-comer-events.entity";
export declare class ComerEventsService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    createComerEvent(comerEvent: ComerEventDto): Promise<import("rxjs").Observable<any>>;
    getAllComerEvents(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerEventByAddress(comer: ComerEventDto & PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerEventByAddressAndId(comerEvent: UpdateComerEventDto): Promise<import("rxjs").Observable<any>>;
    getComerEventByTpEvent(comerEvent: ComerEventDto & ComerLotDto & PaginationDto): Promise<import("rxjs").Observable<any>>;
}
