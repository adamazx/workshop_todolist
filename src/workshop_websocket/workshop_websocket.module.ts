import { Module } from '@nestjs/common';
import { WorkshopWebsocketService } from './workshop_websocket.service';
import { WorkshopWebsocketGateway } from './workshop_websocket.gateway';

@Module({
  providers: [WorkshopWebsocketGateway, WorkshopWebsocketService],
})
export class WorkshopWebsocketModule {}
