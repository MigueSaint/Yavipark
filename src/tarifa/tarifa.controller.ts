// src/tarifa/tarifa.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { TarifaService } from './tarifa.service';
import { Tarifa } from './entities/tarifa.entity';

@Controller('tarifas')
export class TarifaController {
  constructor(private readonly tarifaService: TarifaService) {}

  @Post()
  async create(@Body() tarifaData: Tarifa) {
    return this.tarifaService.create(tarifaData);
  }

  @Get()
  async findAll() {
    return this.tarifaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const tarifa = await this.tarifaService.findOne(Number(id));
    if (!tarifa) {
      throw new NotFoundException(`Tarifa con ID ${id} no encontrada`);
    }
    return tarifa;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() tarifaData: Tarifa) {
    return this.tarifaService.update(Number(id), tarifaData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tarifaService.remove(Number(id));
  }
}
