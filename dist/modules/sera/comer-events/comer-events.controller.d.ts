import { ComerEventsService } from "./comer-events.service";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventDto } from "./dto/comer-events.dto";
import { ComerBatchDto } from "../comer-batch/dto/comer-batch.dto";
export declare class ComerEventsController {
    private readonly service;
    constructor(service: ComerEventsService);
    createComerEvent(comerEvent: ComerEventDto): Promise<import("rxjs").Observable<any>>;
    getAllComerEvents(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerEventByAddress(comer: ComerEventDto & PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerEventByAddressAndId(comer: ComerEventDto): Promise<import("rxjs").Observable<any>>;
    getComerEventByTpEvent(comerEvent: ComerEventDto & ComerBatchDto & PaginationDto): Promise<import("rxjs").Observable<any>>;
}
