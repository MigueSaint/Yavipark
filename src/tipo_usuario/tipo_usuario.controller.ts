// src/tipo-usuario/tipo-usuario.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { TipoUsuarioService } from './tipo_usuario.service';
import { TipoUsuario } from './entities/tipo_usuario.entity';

@Controller('tipos-usuarios')
export class TipoUsuarioController {
  constructor(private readonly tipoUsuarioService: TipoUsuarioService) {}

  @Post()
  async create(@Body() tipoUsuarioData: TipoUsuario) {
    return this.tipoUsuarioService.create(tipoUsuarioData);
  }

  @Get()
  async findAll() {
    return this.tipoUsuarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const tipoUsuario = await this.tipoUsuarioService.findOne(Number(id));
    if (!tipoUsuario) {
      throw new NotFoundException(`Tipo de Usuario con ID ${id} no encontrado`);
    }
    return tipoUsuario;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() tipoUsuarioData: TipoUsuario) {
    return this.tipoUsuarioService.update(Number(id), tipoUsuarioData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tipoUsuarioService.remove(Number(id));
  }
}
