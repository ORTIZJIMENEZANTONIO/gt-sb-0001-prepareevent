import { ApiProperty } from "@nestjs/swagger";

export class SubdelegationDTO{
    id?: number;

    descripcion:string;

    no_delegacion : number;
    
    no_consecutivo_diario : number;

    fec_consecutivo_diario : Date

    no_registro: number; 

    etapa_edo: number; 

  


}