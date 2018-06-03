import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PacienteController} from "./paciente/paciente.controller";
import {MedicamentosController} from "./medicamentos/medicamentos.controller";
import {PacienteService} from "./paciente/paciente.service";
import {MedicamentoService} from "./medicamentos/medicamento.service";
import {AutorizacionController} from "./autorizacion.controller";

@Module({
  imports: [],
  controllers: [AppController, PacienteController, MedicamentosController, AutorizacionController],
  providers: [AppService, PacienteService, MedicamentoService],
})
export class AppModule {}
