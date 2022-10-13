import { ClientProxy } from "@nestjs/microservices";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerConvEventDto } from "./dto/comer-agreement-events.dto";
export declare class ComerAgreementEventsService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    createComerConvEvent(comerEvent: ComerConvEventDto): Promise<import("rxjs").Observable<any>>;
    getAllComerConvEvents(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getComerConvEventById({ eventId }: ComerConvEventDto): Promise<import("rxjs").Observable<any>>;
}
