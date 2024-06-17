import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TipoUsuarioModule } from './tipo_usuario/tipo_usuario.module';
import { TipoVehiculoModule } from './tipo_vehiculo/tipo_vehiculo.module';
import { TarifaModule } from './tarifa/tarifa.module';
import { RegistroParqueaderoModule } from './registro_parqueadero/registro_parqueadero.module';
import { InitModule } from './init/init.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'Yavipark',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    VehiculoModule,
    UsuarioModule,
    TipoUsuarioModule,
    TipoVehiculoModule,
    TarifaModule,
    RegistroParqueaderoModule,
    InitModule,
  ],
})
export class AppModule {}
