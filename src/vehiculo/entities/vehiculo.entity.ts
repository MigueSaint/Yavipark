// src/vehiculo/entities/vehiculo.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { TipoVehiculo } from '../../tipo_vehiculo/entities/tipo_vehiculo.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Tarifa } from '../../tarifa/entities/tarifa.entity';
import { RegistroParqueadero } from '../../registro_parqueadero/entities/registro_parqueadero.entity';

@Entity()
export class Vehiculo {
  @PrimaryGeneratedColumn()
  idvehiculo: number;

  @Column({ length: 7 })
  placa: string;

  @Column({ length: 20 })
  modelo: string;

  @ManyToOne(() => TipoVehiculo, tipoVehiculo => tipoVehiculo.vehiculos)
  @JoinColumn({ name: 'idtipovehiculo' })
  tipoVehiculo: TipoVehiculo;

  @ManyToOne(() => Usuario, usuario => usuario.vehiculos)
  @JoinColumn({ name: 'idusuario' })
  usuario: Usuario;

  @ManyToOne(() => Tarifa, tarifa => tarifa.vehiculos)
  @JoinColumn({ name: 'idtarifa' })
  tarifa: Tarifa;

  @ManyToOne(() => RegistroParqueadero)
  @JoinColumn({ name: 'idregistro' })
  registroParqueadero: RegistroParqueadero;
}
