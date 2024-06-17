// src/tarifa/entities/tarifa.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Vehiculo } from '../../vehiculo/entities/vehiculo.entity';
import { TipoVehiculo } from '../../tipo_vehiculo/entities/tipo_vehiculo.entity';

@Entity()
export class Tarifa {
  @PrimaryGeneratedColumn()
  idtarifa: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  costohora: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  costomes: number;

  @OneToMany(() => Vehiculo, vehiculo => vehiculo.tarifa)
  vehiculos: Vehiculo[];

  @OneToMany(() => TipoVehiculo, tipoVehiculo => tipoVehiculo.idtarifa)
  tipoVehiculos: TipoVehiculo[];
}
