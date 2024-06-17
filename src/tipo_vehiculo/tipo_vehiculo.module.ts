import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoVehiculoService } from './tipo_vehiculo.service';
import { TipoVehiculoController } from './tipo_vehiculo.controller';
import { TipoVehiculo } from './entities/tipo_vehiculo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoVehiculo])],
  providers: [TipoVehiculoService],
  controllers: [TipoVehiculoController],
  exports: [TipoVehiculoService],  // Exporta el servicio
})
export class TipoVehiculoModule {}
