import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { StorehouseDto } from './dto/storehouse.dto';
export declare class StorehouseService {
    private readonly storehouseProxy;
    constructor(storehouseProxy: ClientProxy);
    createStorehouse(storehouseDto: StorehouseDto): Promise<import("rxjs").Observable<any>>;
    getAllStorehouses(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getStorehouseById(code: string): Promise<import("rxjs").Observable<any>>;
    updateStorehouse(code: string, storehouseDto: StorehouseDto): Promise<import("rxjs").Observable<any>>;
    deleteStorehouse(id: string): Promise<import("rxjs").Observable<any>>;
}
