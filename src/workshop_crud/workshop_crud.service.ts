import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateWorkshopCrudDto } from './dto/create-workshop_crud.dto';
import { UpdateWorkshopCrudDto } from './dto/update-workshop_crud.dto';
@Injectable()
export class WorkshopCrudService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateWorkshopCrudDto) {
    return this.prisma.todo.create({
      data,
    });
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  findOne(id: number) {
    return this.prisma.todo.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateWorkshopCrudDto) {
    return this.prisma.todo.update({
      where: { id },
       data,
    });
  }

  remove(id: number) {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
}
