import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SubdelegationDTO } from './dto/subdelegation.dto';
import { SubdelegationService } from './subdelegation.service';

@ApiCreatedResponse()
@Controller('subdelegation')
@ApiTags('subdelegation')
export class SubdelegationController {

    constructor(private subdelegationService: SubdelegationService){}
    @ApiResponse({
        status:200,
        type:[SubdelegationDTO]
    })
    @Get()
    async getAllSubdelegation(@Query() pagination: PaginationDto){
        return await this.subdelegationService.getAllSubdelegation(pagination);
    }
  
    @ApiResponse({
        status:200,
        type:SubdelegationDTO
    })
    @ApiParam({
        name: 'id',
        description: 'Identificador subdelegacion'
    })
    @Get(':id')
    async getSubdelegationById(@Param("id") id:number){
        return await this.subdelegationService.getSubdelegationById(id);
    }


    @ApiResponse({
        status:200,
        type:SubdelegationDTO
    })
    @ApiBody({
        type:SubdelegationDTO
    })
    @Post()
    async createSubdelegation(@Body() subdelegationDTO:SubdelegationDTO){

        return await this.subdelegationService.createSubdelegation(subdelegationDTO);
    }

    
    @ApiParam({
        name: 'id',
        description: 'Identificador subdelegacion'
    })
    @ApiResponse({
        status:200,
        type:SubdelegationDTO
    })
    @ApiBody({
        type:SubdelegationDTO
    })
    @Put(":id")
    async updateSubdelegation(@Body() subdelegationDTO:SubdelegationDTO,@Param("id") id:number){
        return await this.subdelegationService.updateSubdelegation(subdelegationDTO,id);
    }

    @ApiParam({
        name: 'id',
        description: 'Identificador subdelegacion'
    })
    @Delete(":id")
    async deleteSubdelegation(@Param("id") id:number){
        return await this.subdelegationService.deleteSubdelegation(parseInt(`${id}`));
    }


}
