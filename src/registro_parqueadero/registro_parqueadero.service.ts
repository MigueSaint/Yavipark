// src/registro_parqueadero/registro_parqueadero.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegistroParqueadero } from './entities/registro_parqueadero.entity';

@Injectable()
export class RegistroParqueaderoService {
  constructor(
    @InjectRepository(RegistroParqueadero)
    private registroParqueaderoRepository: Repository<RegistroParqueadero>,
  ) {}

  findAll(): Promise<RegistroParqueadero[]> {
    return this.registroParqueaderoRepository.find();
  }

  findOne(id: number): Promise<RegistroParqueadero> {
    return this.registroParqueaderoRepository.findOneBy({ idregistro: id });
  }

  create(registroParqueadero: RegistroParqueadero): Promise<RegistroParqueadero> {
    return this.registroParqueaderoRepository.save(registroParqueadero);
  }

  async update(id: number, registroParqueadero: RegistroParqueadero): Promise<RegistroParqueadero> {
    await this.registroParqueaderoRepository.update(id, registroParqueadero);
    return this.registroParqueaderoRepository.findOneBy({ idregistro: id });
  }

  async remove(id: number): Promise<void> {
    await this.registroParqueaderoRepository.delete(id);
  }
}
