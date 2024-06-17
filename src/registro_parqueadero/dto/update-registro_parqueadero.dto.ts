import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroParqueaderoDto } from './create-registro_parqueadero.dto';

export class UpdateRegistroParqueaderoDto extends PartialType(CreateRegistroParqueaderoDto) {}
