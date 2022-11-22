import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ThirdBaseFileDto {
  
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  eventNumber: number; 

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  fileName: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  bankName: string 
}