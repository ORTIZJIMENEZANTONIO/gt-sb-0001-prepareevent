import { CurrentEventService } from "./current-event.service";
import { CurrentFilterDto } from "./dto/current-ifilter.dto";
export declare class CurrentEventController {
    private readonly service;
    constructor(service: CurrentEventService);
    getCurrentEvents(params: CurrentFilterDto): import("rxjs").Observable<any>;
    spEventsInProgress(): import("rxjs").Observable<any>;
}
