import { ClientProxy } from "@nestjs/microservices";
import { GoodNotDeliveredDto } from "./dto/good-not-delivered.dto";
export declare class GoodNotDeliveredService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    updateGoodNotDeliveredToTheCanceledLot(comer: GoodNotDeliveredDto): import("rxjs").Observable<any>;
}
