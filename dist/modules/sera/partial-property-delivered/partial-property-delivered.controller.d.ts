import { PartialPropertyDelivered } from "./dto/partial-property-delivered.dto";
import { PartialPropertyDeliveredService } from "./partial-property-delivered.service";
export declare class PartialPropertyDeliveredController {
    private readonly service;
    constructor(service: PartialPropertyDeliveredService);
    createComerLot(comer: PartialPropertyDelivered): Promise<import("rxjs").Observable<any>>;
}
