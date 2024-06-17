// src/usuario/entities/usuario.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { Vehiculo } from '../../vehiculo/entities/vehiculo.entity';
import { TipoUsuario } from 'src/tipo_usuario/entities/tipo_usuario.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  idusuario: number;

  @Column({ length: 20 })
  nombreu: string;

  @Column({ length: 20 })
  apellidou: string;

  @Column({ type: 'numeric', precision: 10, scale: 0 })
  cedula: number;

  @Column({ length: 80 })
  correo: string;

  @OneToMany(() => Vehiculo, vehiculo => vehiculo.usuario)
  vehiculos: Vehiculo[];

  @ManyToOne(() => TipoUsuario, tipo_usuario => tipo_usuario.usuario)
  tipo_usuario: TipoUsuario[];
}
