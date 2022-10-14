import { ApiProperty } from "@nestjs/swagger";

export class ComerLotsDto {
  
  lotId: number;

  statusId: string;

  eventId: number;

  publicLot: number;

  description: string | null;

  baseValue: number;

  transferenceId: number | null;

  customerId: number | null;

  refAppraisalPrice: number | null;

  warrantyPrice: number | null;
  
  deliveryDate: Date | null;

  finalPrice: number | null;

  agReference: string | null;

  referential: string | null;

  accumulated: number | null;

  systemValid: string | null;

  lotTax: number | null;

  appTaxAmount: number | null;

  appTaxAmountId: number | null;

  porcAppTax: number | null;

  porcAppTaxId: number | null;

  regCoordination: string | null;

  regCoordinator: string | null;

  FiscMandFact: string | null;

  ubication: string | null;

  advance: number | null;

  amountWithoutTax: number | null;

  notifyOfficeId: number | null;

  notifyPrint: string | null;

  statusVtantId: string | null;

  goodsNumber: number | null;

  faultExceeds: number | null;

  assignedEs: string | null;

  scrapEs: string | null;

  request: string | null;

  withheldAmount: number | null;

  delegationId: number | null;

  originLot: number | null;

  lotCover: number | null;

  palette: number | null;

  assignedWarranty: number | null;

  liqAmount: number | null;

  phase: number | null;

  partialitiesId: number | null;

  percentPoints: number | null;

  advancePercent: number | null;

  taxA: string | null;

}
