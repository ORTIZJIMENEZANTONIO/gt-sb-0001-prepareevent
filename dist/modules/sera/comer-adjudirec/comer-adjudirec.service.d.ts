import { ClientProxy } from "@nestjs/microservices";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerAdjudirecDto } from "./dto/comer-adjudirec.dto";
export declare class ComerAdjudirecService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    createComerAdjudirec(comer: ComerAdjudirecDto): Promise<import("rxjs").Observable<any>>;
    getAllComersAdjudirec(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    deleteComerAdjudirec(comer: ComerAdjudirecDto): Promise<import("rxjs").Observable<any>>;
}
