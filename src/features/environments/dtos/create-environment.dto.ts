import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateEnvironmentDto {
  @IsNumber()
  capacity: number;

  @IsString()
  photo: string;

  @IsArray()
  @IsString({ each: true })
  resources: string[];

  @IsString()
  observation: string;

  @IsString()
  opening: string;

  @IsString()
  closing: string;

  @IsString()
  title: string;

  @IsNumber()
  notification: number;
}
