import { Test, TestingModule } from '@nestjs/testing';
import { RegistroParqueaderoService } from './registro_parqueadero.service';

describe('RegistroParqueaderoService', () => {
  let service: RegistroParqueaderoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroParqueaderoService],
    }).compile();

    service = module.get<RegistroParqueaderoService>(RegistroParqueaderoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
