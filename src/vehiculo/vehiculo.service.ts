// src/vehiculo/vehiculo.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehiculo } from './entities/vehiculo.entity';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Injectable()
export class VehiculoService {
  constructor(
    @InjectRepository(Vehiculo)
    private vehiculoRepository: Repository<Vehiculo>,
  ) {}

  async findAll(): Promise<Vehiculo[]> {
    return this.vehiculoRepository.find();
  }

  async findOne(id: number): Promise<Vehiculo> {
    return this.vehiculoRepository.findOneBy({ idvehiculo: id });
  }

  async create(createVehiculoDto: CreateVehiculoDto): Promise<Vehiculo> {
    const vehiculo = this.vehiculoRepository.create(createVehiculoDto);
    return this.vehiculoRepository.save(vehiculo);
  }

  async update(id: number, vehiculo: Vehiculo): Promise<Vehiculo> {
    await this.vehiculoRepository.update(id, vehiculo);
    return this.vehiculoRepository.findOneBy({ idvehiculo: id });
  } 

  async remove(id: number): Promise<void> {
    const vehiculo = await this.findOne(id);
    await this.vehiculoRepository.remove(vehiculo);
  }
}
