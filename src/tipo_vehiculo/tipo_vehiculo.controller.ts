// src/tipo-vehiculo/tipo-vehiculo.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { TipoVehiculoService } from './tipo_vehiculo.service';
import { TipoVehiculo } from './entities/tipo_vehiculo.entity';

@Controller('tipos-vehiculos')
export class TipoVehiculoController {
  constructor(private readonly tipoVehiculoService: TipoVehiculoService) {}

  @Post()
  async create(@Body() tipoVehiculoData: TipoVehiculo) {
    return this.tipoVehiculoService.create(tipoVehiculoData);
  }

  @Get()
  async findAll() {
    return this.tipoVehiculoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const tipoVehiculo = await this.tipoVehiculoService.findOne(Number(id));
    if (!tipoVehiculo) {
      throw new NotFoundException(`Tipo de Vehículo con ID ${id} no encontrado`);
    }
    return tipoVehiculo;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() tipoVehiculoData: TipoVehiculo) {
    return this.tipoVehiculoService.update(Number(id), tipoVehiculoData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tipoVehiculoService.remove(Number(id));
  }
}
