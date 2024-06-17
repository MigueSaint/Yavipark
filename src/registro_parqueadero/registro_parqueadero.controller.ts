// src/registro-parqueadero/registro-parqueadero.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { RegistroParqueaderoService } from './registro_parqueadero.service';
import { RegistroParqueadero } from './entities/registro_parqueadero.entity';

@Controller('registros-parqueadero')
export class RegistroParqueaderoController {
  constructor(private readonly registroParqueaderoService: RegistroParqueaderoService) {}

  @Post()
  async create(@Body() registroData: RegistroParqueadero) {
    return this.registroParqueaderoService.create(registroData);
  }

  @Get()
  async findAll() {
    return this.registroParqueaderoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const registro = await this.registroParqueaderoService.findOne(Number(id));
    if (!registro) {
      throw new NotFoundException(`Registro de Parqueadero con ID ${id} no encontrado`);
    }
    return registro;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() registroData: RegistroParqueadero) {
    return this.registroParqueaderoService.update(Number(id), registroData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.registroParqueaderoService.remove(Number(id));
  }
}
