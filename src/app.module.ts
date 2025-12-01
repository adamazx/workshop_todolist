import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { WorkshopCrudModule } from './workshop_crud/workshop_crud.module';

@Module({
  imports: [WorkshopCrudModule],
  providers: [PrismaService],
})
export class AppModule {}
