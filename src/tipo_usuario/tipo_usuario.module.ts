import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoUsuarioService } from './tipo_usuario.service';
import { TipoUsuarioController } from './tipo_usuario.controller';
import { TipoUsuario } from './entities/tipo_usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoUsuario])],
  providers: [TipoUsuarioService],
  controllers: [TipoUsuarioController],
  exports: [TipoUsuarioService],  // Exporta el servicio si se necesita en otros módulos
})
export class TipoUsuarioModule {}
