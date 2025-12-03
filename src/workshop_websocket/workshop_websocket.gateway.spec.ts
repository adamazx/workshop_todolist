import { Test, TestingModule } from '@nestjs/testing';
import { WorkshopWebsocketGateway } from './workshop_websocket.gateway';
import { WorkshopWebsocketService } from './workshop_websocket.service';

describe('WorkshopWebsocketGateway', () => {
  let gateway: WorkshopWebsocketGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkshopWebsocketGateway, WorkshopWebsocketService],
    }).compile();

    gateway = module.get<WorkshopWebsocketGateway>(WorkshopWebsocketGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
