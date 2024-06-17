// src/tipo_vehiculo/tipo_vehiculo.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoVehiculo } from './entities/tipo_vehiculo.entity';

@Injectable()
export class TipoVehiculoService {
  constructor(
    @InjectRepository(TipoVehiculo)
    private tipoVehiculoRepository: Repository<TipoVehiculo>,
  ) {}

  findAll(): Promise<TipoVehiculo[]> {
    return this.tipoVehiculoRepository.find();
  }

  findOne(id: number): Promise<TipoVehiculo> {
    return this.tipoVehiculoRepository.findOneBy({ idtipovehiculo: id });
  }

  create(tipoVehiculo: TipoVehiculo): Promise<TipoVehiculo> {
    return this.tipoVehiculoRepository.save(tipoVehiculo);
  }

  async update(id: number, tipoVehiculo: TipoVehiculo): Promise<TipoVehiculo> {
    await this.tipoVehiculoRepository.update(id, tipoVehiculo);
    return this.tipoVehiculoRepository.findOneBy({ idtipovehiculo: id });
  }

  async remove(id: number): Promise<void> {
    await this.tipoVehiculoRepository.delete(id);
  }
}
