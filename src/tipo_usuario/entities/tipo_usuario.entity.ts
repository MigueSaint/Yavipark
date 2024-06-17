// src/tipo_usuario/entities/tipo_usuario.entity.ts
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class TipoUsuario {
  @PrimaryGeneratedColumn()
  idtipousuario: number;

  @Column({ length: 20 })
  tipousuario: string;

  @OneToMany(() => Usuario, usuario => usuario.tipo_usuario)
  usuario: Usuario[];
}
