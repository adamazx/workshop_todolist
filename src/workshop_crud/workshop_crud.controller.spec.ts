import { Test, TestingModule } from '@nestjs/testing';
import { WorkshopCrudController } from './workshop_crud.controller';
import { WorkshopCrudService } from './workshop_crud.service';

describe('WorkshopCrudController', () => {
  let controller: WorkshopCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkshopCrudController],
      providers: [WorkshopCrudService],
    }).compile();

    controller = module.get<WorkshopCrudController>(WorkshopCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
