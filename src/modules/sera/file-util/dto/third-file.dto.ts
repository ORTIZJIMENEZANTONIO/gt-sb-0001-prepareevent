import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ThirdFileDto {
  
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  eventId: Number; 

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  fileName: String

}