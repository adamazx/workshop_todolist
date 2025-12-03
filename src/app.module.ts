import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { WorkshopCrudModule } from './workshop_crud/workshop_crud.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WorkshopWebsocketModule } from './workshop_websocket/workshop_websocket.module';

@Module({
  imports: [WorkshopCrudModule, AuthModule, UsersModule, WorkshopWebsocketModule,],
  providers: [PrismaService],
})
export class AppModule {}
