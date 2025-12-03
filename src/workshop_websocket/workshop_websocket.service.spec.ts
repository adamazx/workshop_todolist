import { Test, TestingModule } from '@nestjs/testing';
import { WorkshopWebsocketService } from './workshop_websocket.service';

describe('WorkshopWebsocketService', () => {
  let service: WorkshopWebsocketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkshopWebsocketService],
    }).compile();

    service = module.get<WorkshopWebsocketService>(WorkshopWebsocketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
