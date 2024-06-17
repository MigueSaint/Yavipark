// src/usuario/usuario.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() usuarioData: Usuario) {
    return this.usuarioService.create(usuarioData);
  }

  @Get()
  async findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const usuario = await this.usuarioService.findOne(Number(id));
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() usuarioData: Usuario) {
    return this.usuarioService.update(Number(id), usuarioData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usuarioService.remove(Number(id));
  }
}
