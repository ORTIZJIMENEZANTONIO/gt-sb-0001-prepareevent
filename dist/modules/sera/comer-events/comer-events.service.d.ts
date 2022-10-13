import { ClientProxy } from "@nestjs/microservices";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerBatchDto } from "../comer-batch/dto/comer-batch.dto";
import { ComerEventDto } from "./dto/comer-events.dto";
export declare class ComerEventsService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    createComerEvent(comerEvent: ComerEventDto): Promise<import("rxjs").Observable<any>>;
    getAllComerEvents(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerEventByAddress(comer: ComerEventDto & PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerEventByAddressAndId(comerEvent: ComerEventDto): Promise<import("rxjs").Observable<any>>;
    getComerEventByTpEvent(comerEvent: ComerEventDto & ComerBatchDto & PaginationDto): Promise<import("rxjs").Observable<any>>;
}