import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SubdelegationDTO } from './dto/subdelegation.dto';
export declare class SubdelegationService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllSubdelegation(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSubdelegationById(id: number): Promise<import("rxjs").Observable<any>>;
    createSubdelegation(subdelegationDTO: SubdelegationDTO): Promise<import("rxjs").Observable<any>>;
    updateSubdelegation(subdelegationDTO: SubdelegationDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteSubdelegation(id: number): Promise<import("rxjs").Observable<any>>;
}
