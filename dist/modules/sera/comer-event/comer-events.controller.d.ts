import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventDto } from "./dto/comer-events.dto";
import { ComerLotDto } from "../comer-lot/dto/comer-lot.dto";
import { ComerEventsService } from "./comer-events.service";
import { UpdateComerEventDto } from "./dto/update-comer-events.entity";
export declare class ComerEventsController {
    private readonly service;
    constructor(service: ComerEventsService);
    createComerEvent(comerEvent: ComerEventDto): Promise<import("rxjs").Observable<any>>;
    getAllComerEvents(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerEventByAddress(comer: ComerEventDto & PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerEventByAddressAndId(comer: UpdateComerEventDto): Promise<import("rxjs").Observable<any>>;
    getComerEventByTpEvent(comerEvent: ComerEventDto & ComerLotDto & PaginationDto): Promise<import("rxjs").Observable<any>>;
}
