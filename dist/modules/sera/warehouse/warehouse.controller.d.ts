import { WarehouseService } from './warehouse.service';
import { WarehouseDto } from './dto/warehouse.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class WarehouseController {
    private readonly warehouseService;
    constructor(warehouseService: WarehouseService);
    createWarehouse(warehouseDto: WarehouseDto): Promise<import("rxjs").Observable<any>>;
    getAllWarehouses(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getWarehouseById(id: number): Promise<import("rxjs").Observable<any>>;
    updateWarehouse(id: number, regionalData: WarehouseDto): Promise<import("rxjs").Observable<any>>;
    deleteWarehouse(id: number): Promise<import("rxjs").Observable<any>>;
}
