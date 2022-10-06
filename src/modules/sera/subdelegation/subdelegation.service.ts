import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SubdelegationDTO } from './dto/subdelegation.dto';

@Injectable()
export class SubdelegationService {
    constructor(@Inject('SERVICE_SB_0001') private readonly clientProxy:ClientProxy){}

    async getAllSubdelegation(pagination: PaginationDto){
        const pattern = { cmd: 'getAllSubdelegation' };
        return await this.clientProxy.send(pattern,pagination);
    }

    async getSubdelegationById(id:number){
        const pattern = { cmd: 'getSubdelegationById' };
        return await this.clientProxy.send(pattern,id);
    }

    async createSubdelegation( subdelegationDTO:SubdelegationDTO){

        const pattern = { cmd: 'createSubdelegation' };
        return await this.clientProxy.send(pattern,subdelegationDTO);
    }


    async updateSubdelegation(subdelegationDTO:SubdelegationDTO, id:number){

        subdelegationDTO.id = id;
        const pattern = { cmd: 'updateSubdelegation' };
        return await this.clientProxy.send(pattern,subdelegationDTO);
    }

    async deleteSubdelegation( id:number){

        const pattern = { cmd: 'deleteSubdelegation' };
        return await this.clientProxy.send(pattern,parseInt(`${id}`));
    }
}
