import { ApiProperty } from "@nestjs/swagger";

export class WarehouseDto {

  @ApiProperty({ example: 'Identificador del almacén por ejemplo 1' })
  idWarehouse: number | null;

  @ApiProperty({ example: 'Descripción del almacén' })
  description: string;

  @ApiProperty({ example: 'Ubicación del almacén' })
  ubication: string;

  @ApiProperty({ example: 'Ubicación del almacén' })
  manager: string;

  @ApiProperty({ example: 'Número de registro ej. 1' })
  registerNumber: number | null;

  @ApiProperty({ example: 'Código de estado de almacén ej. 1' })
  stateCode: number | null;

  @ApiProperty({ example: 'Código de ciudad de almacén ej. 1' })
  cityCode: number | null;

  @ApiProperty({ example: 'Código de municicpio de almacén ej. 1' })
  municipalityCode: number | null;

  @ApiProperty({ example: 'Código de localidad de almacén ej. 1' })
  localityCode: number | null;

  @ApiProperty({ example: 'activo del almacén' })
  indActive: string | null;

  @ApiProperty({ example: 'Tipo del almacén' })
  type: string | null;

  @ApiProperty({ example: 'Delegación responsable del almacén' })
  responsibleDelegation: string | null;

}