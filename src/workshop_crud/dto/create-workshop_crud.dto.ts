import { IsString, IsNotEmpty, IsEnum, IsOptional } from "class-validator";
import { Status } from '@prisma/client';

export class CreateWorkshopCrudDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  status?: Status;
}
