import { Injectable } from '@nestjs/common';
import { CreateWorkshopWebsocketDto } from './dto/create-workshop_websocket.dto';
import { UpdateWorkshopWebsocketDto } from './dto/update-workshop_websocket.dto';

@Injectable()
export class WorkshopWebsocketService {
  create(createWorkshopWebsocketDto: CreateWorkshopWebsocketDto) {
    return 'This action adds a new workshopWebsocket';
  }

  findAll() {
    return `This action returns all workshopWebsocket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workshopWebsocket`;
  }

  update(id: number, updateWorkshopWebsocketDto: UpdateWorkshopWebsocketDto) {
    return `This action updates a #${id} workshopWebsocket`;
  }

  remove(id: number) {
    return `This action removes a #${id} workshopWebsocket`;
  }
}
