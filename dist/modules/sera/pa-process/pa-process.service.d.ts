import { ClientProxy } from "@nestjs/microservices";
import { ChangeStatusValidateDto } from "./dto/change-status-validate.dto";
import { PaRejectDto } from "./dto/reject.dto";
import { RemittancePrepByGoodDto } from "./dto/remmitance-prep-by-good.dto";
export declare class PaProcessService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    paReject(comer: PaRejectDto): Promise<import("rxjs").Observable<any>>;
    paRemittancePrepByGood(params: RemittancePrepByGoodDto): Promise<import("rxjs").Observable<any>>;
    paChangeStatusValidate(params: ChangeStatusValidateDto): Promise<import("rxjs").Observable<any>>;
}
