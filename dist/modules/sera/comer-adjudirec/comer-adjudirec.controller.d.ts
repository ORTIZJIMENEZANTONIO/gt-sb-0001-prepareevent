import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerAdjudirecService } from "./comer-adjudirec.service";
import { ComerAdjudirecDto } from "./dto/comer-adjudirec.dto";
export declare class ComerAdjudirecController {
    private readonly service;
    constructor(service: ComerAdjudirecService);
    createComerAdjudirec(comer: ComerAdjudirecDto): Promise<import("rxjs").Observable<any>>;
    getAllComersAdjudirec(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
}
