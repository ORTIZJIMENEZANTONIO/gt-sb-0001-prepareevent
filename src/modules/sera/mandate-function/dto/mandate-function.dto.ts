import { IsNotEmpty, isNotEmpty, IsNumber, IsPositive } from "class-validator";

export class MandateFunctionDto {
  
  @IsNumber()
  @IsNotEmpty()
  lotId: number;

  @IsNumber()
  @IsNotEmpty()
  goodId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  lotIdToUdate: number;
}
