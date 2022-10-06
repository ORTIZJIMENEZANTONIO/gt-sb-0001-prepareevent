import { ApiProperty } from '@nestjs/swagger';

export class StorehouseDto {
  
  @ApiProperty({ example: 'Identificador de la bodega por ejemplo 1' })
  idStorehouse: string;

  @ApiProperty({ example: 'Ubicación de la bodega' })
  manager: string | null;

  @ApiProperty({ example: 'Descripción de la bodega' })
  description: string | null;

  @ApiProperty({ example: 'Código de municicpio de bodega ej. 1' })
  municipality: string | null;

  @ApiProperty({ example: 'Código de localidad de bodega ej. 1' })
  locality: string | null;

  @ApiProperty({ example: 'Ubicación de la bodega' })
  ubication: string | null;

  @ApiProperty({ example: 'Ubicación de la bodega' })
  idEntity: number | null;

}