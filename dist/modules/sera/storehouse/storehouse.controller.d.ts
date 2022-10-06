import { StorehouseService } from './storehouse.service';
import { StorehouseDto } from './dto/storehouse.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class StorehouseController {
    private readonly storehouseService;
    constructor(storehouseService: StorehouseService);
    createstorehouse(storehouseDto: StorehouseDto): Promise<import("rxjs").Observable<any>>;
    getAllstorehouses(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getstorehouseById(id: string): Promise<import("rxjs").Observable<any>>;
    updatestorehouse(idToUpdate: string, data: StorehouseDto): Promise<import("rxjs").Observable<any>>;
    deletestorehouse(id: string): Promise<import("rxjs").Observable<any>>;
}
