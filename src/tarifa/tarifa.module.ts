import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarifaService } from './tarifa.service';
import { TarifaController } from './tarifa.controller';
import { Tarifa } from './entities/tarifa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tarifa])],
  providers: [TarifaService],
  controllers: [TarifaController],
  exports: [TarifaService],  // Asegúrate de exportar el servicio
})
export class TarifaModule {}
