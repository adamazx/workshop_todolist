import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkshopCrudService } from './workshop_crud.service';
import { CreateWorkshopCrudDto } from './dto/create-workshop_crud.dto';
import { UpdateWorkshopCrudDto } from './dto/update-workshop_crud.dto';

@Controller('workshop-crud')
export class WorkshopCrudController {
  constructor(private readonly workshopCrudService: WorkshopCrudService) {}

  @Post()
  create(@Body() createWorkshopCrudDto: CreateWorkshopCrudDto) {
    return this.workshopCrudService.create(createWorkshopCrudDto);
  }

  @Get()
  findAll() {
    return this.workshopCrudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workshopCrudService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkshopCrudDto: UpdateWorkshopCrudDto) {
    return this.workshopCrudService.update(+id, updateWorkshopCrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workshopCrudService.remove(+id);
  }
}
