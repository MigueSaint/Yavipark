// src/usuario/usuario.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  findOne(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOneBy({ idusuario: id });
  }

  create(usuario: Usuario): Promise<Usuario> {
    return this.usuarioRepository.save(usuario);
  }

  async update(id: number, usuario: Usuario): Promise<Usuario> {
    await this.usuarioRepository.update(id, usuario);
    return this.usuarioRepository.findOneBy({ idusuario: id });
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
