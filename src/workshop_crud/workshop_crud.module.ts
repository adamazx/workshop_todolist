import { Module } from '@nestjs/common';
import { WorkshopCrudService } from './workshop_crud.service';
import { WorkshopCrudController } from './workshop_crud.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [WorkshopCrudController],
  providers: [WorkshopCrudService, PrismaService],
})
export class WorkshopCrudModule {}
