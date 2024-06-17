import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroParqueaderoService } from './registro_parqueadero.service';
import { RegistroParqueaderoController } from './registro_parqueadero.controller';
import { RegistroParqueadero } from './entities/registro_parqueadero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegistroParqueadero])],
  providers: [RegistroParqueaderoService],
  controllers: [RegistroParqueaderoController],
  exports: [RegistroParqueaderoService],  // Asegúrate de exportar el servicio
})
export class RegistroParqueaderoModule {}
