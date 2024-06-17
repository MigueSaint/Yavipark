// src/tarifa/tarifa.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarifa } from './entities/tarifa.entity';

@Injectable()
export class TarifaService {
  constructor(
    @InjectRepository(Tarifa)
    private tarifaRepository: Repository<Tarifa>,
  ) {}

  findAll(): Promise<Tarifa[]> {
    return this.tarifaRepository.find();
  }

  findOne(id: number): Promise<Tarifa> {
    return this.tarifaRepository.findOneBy({ idtarifa: id });
  }

  create(tarifa: Tarifa): Promise<Tarifa> {
    return this.tarifaRepository.save(tarifa);
  }

  async update(id: number, tarifa: Tarifa): Promise<Tarifa> {
    await this.tarifaRepository.update(id, tarifa);
    return this.tarifaRepository.findOneBy({ idtarifa: id });
  }

  async remove(id: number): Promise<void> {
    await this.tarifaRepository.delete(id);
  }
}
