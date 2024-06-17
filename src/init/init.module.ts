import { Module } from '@nestjs/common';
import { InitService } from './init.service';
import { VehiculoModule } from '../vehiculo/vehiculo.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { TipoVehiculoModule } from '../tipo_vehiculo/tipo_vehiculo.module';
import { TarifaModule } from '../tarifa/tarifa.module';
import { RegistroParqueaderoModule } from '../registro_parqueadero/registro_parqueadero.module';
import { TipoUsuarioModule } from '../tipo_usuario/tipo_usuario.module';

@Module({
  imports: [
    VehiculoModule,
    UsuarioModule,
    TipoVehiculoModule,
    TarifaModule,
    RegistroParqueaderoModule,
    TipoUsuarioModule,  // Importa el módulo de TipoUsuario
  ],
  providers: [InitService],
})
export class InitModule {}
