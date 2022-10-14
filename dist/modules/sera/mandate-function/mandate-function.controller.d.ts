import { MandateFunctionDto } from "./dto/mandate-function.dto";
import { MandateFunctionService } from "./mandate-function.service";
export declare class MandateFunctionController {
    private readonly service;
    constructor(service: MandateFunctionService);
    updateMandate(data: MandateFunctionDto): Promise<import("rxjs").Observable<any>>;
}
