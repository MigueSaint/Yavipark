// src/vehiculo/vehiculo.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './entities/vehiculo.entity';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';

@Controller('vehiculo')
export class VehiculoController {
  constructor(private readonly vehiculoService: VehiculoService) {}

  @Post()
  create(@Body() createVehiculoDto: CreateVehiculoDto) {
    return this.vehiculoService.create(createVehiculoDto);
  }

  @Get()
  async findAll() {
    return this.vehiculoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const vehiculo = await this.vehiculoService.findOne(Number(id));
    if (!vehiculo) {
      throw new NotFoundException(`Vehículo con ID ${id} no encontrado`);
    }
    return vehiculo;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() vehiculoData: Vehiculo) {
    return this.vehiculoService.update(Number(id), vehiculoData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.vehiculoService.remove(Number(id));
  }
}
