import { ChangeStatusValidateDto } from "./dto/change-status-validate.dto";
import { PaRejectDto } from "./dto/reject.dto";
import { RemittancePrepByGoodDto } from "./dto/remmitance-prep-by-good.dto";
import { PaProcessService } from "./pa-process.service";
export declare class PaProcessController {
    private readonly service;
    constructor(service: PaProcessService);
    paReject(comer: PaRejectDto): Promise<import("rxjs").Observable<any>>;
    paRemittancePrepByGood(comer: RemittancePrepByGoodDto): Promise<import("rxjs").Observable<any>>;
    paChangeStatusValidate(comer: ChangeStatusValidateDto): Promise<import("rxjs").Observable<any>>;
}
