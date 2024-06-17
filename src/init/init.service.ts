import { Injectable, OnModuleInit } from '@nestjs/common';
import { VehiculoService } from '../vehiculo/vehiculo.service';
import { UsuarioService } from '../usuario/usuario.service';
import { TipoVehiculoService } from '../tipo_vehiculo/tipo_vehiculo.service';
import { TarifaService } from '../tarifa/tarifa.service';
import { RegistroParqueaderoService } from '../registro_parqueadero/registro_parqueadero.service';  // Importa el servicio de RegistroParqueadero
import { TipoUsuarioService } from '../tipo_usuario/tipo_usuario.service';

@Injectable()
export class InitService implements OnModuleInit {
  constructor(
    private readonly vehiculoService: VehiculoService,
    private readonly usuarioService: UsuarioService,
    private readonly tipoVehiculoService: TipoVehiculoService,
    private readonly tarifaService: TarifaService,
    private readonly registroParqueaderoService: RegistroParqueaderoService,  // Asegúrate de inyectar el servicio
    private readonly tipoUsuarioService: TipoUsuarioService,
  ) {}

  async onModuleInit() {
    await this.initializeData();
    
  }

  async initializeData() {
    // Lógica de inicialización aquí
  }
}
