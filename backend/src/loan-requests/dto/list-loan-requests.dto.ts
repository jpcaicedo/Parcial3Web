import { Type } from "class-transformer";
import { IsInt, IsOptional, Min } from "class-validator";

export class ListLoanRequestsDto {
  @IsOptional ()
  @IsInt ()
  @Min (1)
  @Type(() => Number)
  toolId?: number;
}

