import { ClientProxy } from "@nestjs/microservices";
import { PartialPropertyDelivered } from "./dto/partial-property-delivered.dto";
export declare class PartialPropertyDeliveredService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    createNewPartialGood(comer: PartialPropertyDelivered): Promise<import("rxjs").Observable<any>>;
}
