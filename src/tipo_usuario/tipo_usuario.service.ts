// src/tipo_usuario/tipo_usuario.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoUsuario } from './entities/tipo_usuario.entity';

@Injectable()
export class TipoUsuarioService {
  constructor(
    @InjectRepository(TipoUsuario)
    private tipoUsuarioRepository: Repository<TipoUsuario>,
  ) {}

  findAll(): Promise<TipoUsuario[]> {
    return this.tipoUsuarioRepository.find();
  }

  findOne(id: number): Promise<TipoUsuario> {
    return this.tipoUsuarioRepository.findOneBy({ idtipousuario: id });
  }

  create(tipoUsuario: TipoUsuario): Promise<TipoUsuario> {
    return this.tipoUsuarioRepository.save(tipoUsuario);
  }

  async update(id: number, tipoUsuario: TipoUsuario): Promise<TipoUsuario> {
    await this.tipoUsuarioRepository.update(id, tipoUsuario);
    return this.tipoUsuarioRepository.findOneBy({ idtipousuario: id });
  }

  async remove(id: number): Promise<void> {
    await this.tipoUsuarioRepository.delete(id);
  }
}
