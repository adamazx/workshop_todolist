import { Test, TestingModule } from '@nestjs/testing';
import { WorkshopCrudService } from './workshop_crud.service';

describe('WorkshopCrudService', () => {
  let service: WorkshopCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkshopCrudService],
    }).compile();

    service = module.get<WorkshopCrudService>(WorkshopCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
