// src/registro_parqueadero/entities/registro_parqueadero.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { Vehiculo } from '../../vehiculo/entities/vehiculo.entity';

@Entity()
export class RegistroParqueadero {
  @PrimaryGeneratedColumn()
  idregistro: number;

  @Column({ type: 'timestamp' })
  fecha_hora_entrada: Date;

  @Column({ type: 'timestamp' })
  fecha_hora_salida: Date;

  @Column({ type: 'numeric', precision: 10, scale: 0 })
  capacidad: number;

  @Column({ type: 'numeric', precision: 10, scale: 0 })
  disponible: number;

  @OneToMany(() => Vehiculo, vehiculo => vehiculo.registroParqueadero)
  vehiculo: Vehiculo;
}
