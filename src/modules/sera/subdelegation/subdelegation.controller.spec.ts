import { Test, TestingModule } from '@nestjs/testing';
import { SubdelegationController } from './subdelegation.controller';

describe('SubdelegationController', () => {
  let controller: SubdelegationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubdelegationController],
    }).compile();

    controller = module.get<SubdelegationController>(SubdelegationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
