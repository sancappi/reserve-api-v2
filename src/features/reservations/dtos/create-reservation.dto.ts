import { IsNumber, IsString } from "class-validator";

export class CreateReservationDto {
  @IsString()
  date: string;

  @IsString()
  start: string;

  @IsString()
  end: string;

  @IsNumber()
  environmentId: number;

  @IsNumber()
  userId: number;
}
