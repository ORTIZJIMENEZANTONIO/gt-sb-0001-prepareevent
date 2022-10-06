import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { WarehouseDto } from './dto/warehouse.dto';
export declare class WarehouseService {
    private readonly warehouseProxy;
    constructor(warehouseProxy: ClientProxy);
    createWarehouse(warehouseDto: WarehouseDto): Promise<import("rxjs").Observable<any>>;
    getAllWarehouses(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getWarehouseById(id: number): Promise<import("rxjs").Observable<any>>;
    updateWarehouse(idToUpdate: number, body: WarehouseDto): Promise<import("rxjs").Observable<any>>;
    deleteWarehouse(id: number): Promise<import("rxjs").Observable<any>>;
}
