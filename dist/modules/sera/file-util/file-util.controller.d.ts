import { FileUtilService } from "./file-util.service";
import { ThirdFileDto } from "./dto/third-file.dto";
import { GoodPriceDto } from "./dto/good-price.dto";
import { ThirdBaseFileDto } from "./dto/third-base-file.dto";
export declare class FileUtilController {
    private readonly service;
    constructor(service: FileUtilService);
    createThirdFile(params: ThirdFileDto): Promise<import("rxjs").Observable<any>>;
    createThirdBaseFile(params: ThirdBaseFileDto): Promise<import("rxjs").Observable<any>>;
    calculateGoodPrice(params: GoodPriceDto): Promise<import("rxjs").Observable<any>>;
}
