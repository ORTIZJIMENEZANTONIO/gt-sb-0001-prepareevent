import { FileUtilService } from "./file-util.service";
export declare class FileUtilController {
    private readonly service;
    constructor(service: FileUtilService);
    createComerClient(): Promise<import("rxjs").Observable<any>>;
}
