import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculoService } from './vehiculo.service';
import { VehiculoController } from './vehiculo.controller';
import { Vehiculo } from './entities/vehiculo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehiculo])],
  providers: [VehiculoService],
  controllers: [VehiculoController],
  exports: [VehiculoService], 
})
export class VehiculoModule {}
