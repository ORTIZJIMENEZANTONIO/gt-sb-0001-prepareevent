import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from "class-validator";

export class ComerEventDto {
  // pk auto

  eventId: number | null;


  eventTpId: number;


  statusVtaId: string;

  
  processCve: string | null;

  
  observations: string | null;

 
  address: string | null;

  
  failureDate: Date | null;

  
  place: string | null;

  
  eventDate: Date | null;

 
  texto1: string | null;

  
  texto2: string | null;

  
  firmante: string | null;


  firmanteCargo: string | null;

  
  notes: string | null;

  
  textofin3: string | null;


  textofin4: string | null;

  
  baseCost: number | null;

  
  numBaseVend: number | null;

  
  user: string | null;

  
  month: number | null;

 
  year: number | null;

  
  delegationId: number | null;

  
  faseInmu: number | null;

  
  thirdId: number | null;

  
  fechaNotificacion: Date | null;

  
  eventClosingDate: Date | null;

  
  tpsolavalId: number | null;

  
  ivaApplies: string | null;
}
