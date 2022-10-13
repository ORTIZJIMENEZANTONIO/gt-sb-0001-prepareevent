import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerAgreementEventsService } from "./comer-agreement-events.service";
import { ComerConvEventDto } from "./dto/comer-agreement-events.dto";
export declare class ComerAgreementEventsController {
    private readonly service;
    constructor(service: ComerAgreementEventsService);
    createComerEvent(comerEvent: ComerConvEventDto): Promise<import("rxjs").Observable<any>>;
    getAllComerEvents(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerConvEventById(comerconvEvent: ComerConvEventDto): Promise<import("rxjs").Observable<any>>;
}
