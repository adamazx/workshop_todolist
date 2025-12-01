import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkshopCrudDto } from './create-workshop_crud.dto';

export class UpdateWorkshopCrudDto extends PartialType(CreateWorkshopCrudDto) {}
