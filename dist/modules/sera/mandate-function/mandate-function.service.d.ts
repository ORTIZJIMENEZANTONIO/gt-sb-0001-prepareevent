import { ClientProxy } from "@nestjs/microservices";
import { MandateFunctionDto } from "./dto/mandate-function.dto";
export declare class MandateFunctionService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    updateMandate(params: MandateFunctionDto): Promise<import("rxjs").Observable<any>>;
}
