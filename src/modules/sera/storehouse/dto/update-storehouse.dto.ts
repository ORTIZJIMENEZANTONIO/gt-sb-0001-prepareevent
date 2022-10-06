import { PartialType } from "@nestjs/swagger";
import { ApiProperty } from "@nestjs/swagger";

import { StorehouseDto } from "./storehouse.dto";

export class UpdateStorehouseDto extends PartialType( StorehouseDto ) { 
  
  @ApiProperty({ example: "Identificador cadena" })
  idToUpdate: string;
}