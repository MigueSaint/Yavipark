import { Test, TestingModule } from '@nestjs/testing';
import { RegistroParqueaderoController } from './registro_parqueadero.controller';
import { RegistroParqueaderoService } from './registro_parqueadero.service';

describe('RegistroParqueaderoController', () => {
  let controller: RegistroParqueaderoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroParqueaderoController],
      providers: [RegistroParqueaderoService],
    }).compile();

    controller = module.get<RegistroParqueaderoController>(RegistroParqueaderoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
