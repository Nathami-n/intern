import { Test, TestingModule } from '@nestjs/testing';
import { IinternshipsController } from './iinternships.controller';

describe('IinternshipsController', () => {
  let controller: IinternshipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IinternshipsController],
    }).compile();

    controller = module.get<IinternshipsController>(IinternshipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
