import { FileUtilService } from "./file-util.service";
export declare class FileUtilController {
    private readonly service;
    constructor(service: FileUtilService);
    createComerClient(): Promise<import("rxjs").Observable<any>>;
    createThirdFile(params: {
        eventId: number;
        fileName: string;
    }): Promise<import("rxjs").Observable<any>>;
    createThirdBaseFile(params: {
        fileName: string;
        eventNumber: number;
        bankName: string;
    }): Promise<import("rxjs").Observable<any>>;
    calculateGoodPrice(params: {
        eventId: number;
        lotId: number;
    }): Promise<import("rxjs").Observable<any>>;
}
