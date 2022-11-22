import { GoodNotDeliveredDto } from "./dto/good-not-delivered.dto";
import { GoodNotDeliveredService } from "./good-not-delivered.service";
export declare class GoodNotDeliveredController {
    private readonly service;
    constructor(service: GoodNotDeliveredService);
    updateGoodNotDeliveredToTheCanceledLot(comer: GoodNotDeliveredDto): import("rxjs").Observable<any>;
}
