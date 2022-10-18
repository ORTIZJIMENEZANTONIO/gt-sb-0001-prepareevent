import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from "class-validator";

export class ComerConvEventDto {
  
  eventId: number;


  announcementEventId: number;

  
  description: string | null;

 
  dates: string | null;

  
  schedule: string | null;

  
  place: string | null;


  restriction: string | null;
}
