import { ClientProxy } from "@nestjs/microservices";
import { SentenceDispersionDto } from "./dto/sentence-dispersion.dto";
export declare class ComerSentenceDispersionService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    setSentenceDispersion(params: SentenceDispersionDto): Promise<import("rxjs").Observable<any>>;
}
