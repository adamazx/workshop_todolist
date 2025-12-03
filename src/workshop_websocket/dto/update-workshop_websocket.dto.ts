import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkshopWebsocketDto } from './create-workshop_websocket.dto';

export class UpdateWorkshopWebsocketDto extends PartialType(CreateWorkshopWebsocketDto) {
  id: number;
}
