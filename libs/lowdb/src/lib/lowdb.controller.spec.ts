import { Test } from '@nestjs/testing';
import { LowdbController } from './lowdb.controller';

describe('LowdbController', () => {
  let controller: LowdbController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [LowdbController],
    }).compile();

    controller = module.get(LowdbController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
