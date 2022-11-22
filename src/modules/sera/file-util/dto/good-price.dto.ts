import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class GoodPriceDto {
  
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  eventId: number; 

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  lotId: number

}