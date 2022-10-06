import { Test, TestingModule } from '@nestjs/testing';
import { SubdelegationService } from './subdelegation.service';

describe('SubdelegationService', () => {
  let service: SubdelegationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubdelegationService],
    }).compile();

    service = module.get<SubdelegationService>(SubdelegationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
