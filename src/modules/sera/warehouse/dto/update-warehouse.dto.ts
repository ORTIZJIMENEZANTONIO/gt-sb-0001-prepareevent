import { PartialType } from "@nestjs/swagger";
import { ApiProperty } from "@nestjs/swagger";

import { WarehouseDto } from "./warehouse.dto";

export class UpdateWarehouseDto extends PartialType(WarehouseDto) {

  @ApiProperty({ example: 'Identificador almacén a modificar ej. 1' })
  idToUpdate: number;

}