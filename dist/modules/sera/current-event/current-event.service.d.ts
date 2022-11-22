import { ClientProxy } from "@nestjs/microservices";
import { CurrentFilterDto } from "./dto/current-ifilter.dto";
export declare class CurrentEventService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    getCurrentEvents(params: CurrentFilterDto): import("rxjs").Observable<any>;
    spEventsInProgress(params: {}): import("rxjs").Observable<any>;
}
