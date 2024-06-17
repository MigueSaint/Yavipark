// src/tipo_vehiculo/entities/tipo_vehiculo.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Vehiculo } from '../../vehiculo/entities/vehiculo.entity';
import { Tarifa } from '../../tarifa/entities/tarifa.entity';


@Entity()
export class TipoVehiculo {
  @PrimaryGeneratedColumn()
  idtipovehiculo: number;

  @Column({ length: 20 })
  nombrevehiculo: string;

  @OneToMany(() => Vehiculo, vehiculo => vehiculo.tipoVehiculo)
  vehiculos: Vehiculo[];

  @ManyToOne(() => Tarifa, tarifa => tarifa.tipoVehiculos)
  idtarifa: Tarifa;
}
