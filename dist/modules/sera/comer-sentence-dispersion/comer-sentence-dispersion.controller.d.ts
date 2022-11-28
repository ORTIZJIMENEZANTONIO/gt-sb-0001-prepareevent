import { SentenceDispersionDto } from "./dto/sentence-dispersion.dto";
import { ComerSentenceDispersionService } from "./comer-sentence-dispersion.service";
export declare class ComerSentenceDispersionController {
    private readonly service;
    constructor(service: ComerSentenceDispersionService);
    setSentenceDispersio(params: SentenceDispersionDto): Promise<import("rxjs").Observable<any>>;
}
