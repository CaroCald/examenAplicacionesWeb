import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from "@nestjs/common";
import {Paciente, PacienteService} from "./paciente.service";
import {PipesUsuarios} from "../pipes/pipes.usuarios";
import {PACIENTE_SCHEMA} from "./paciente.schema";

@Controller()
export class PacienteController {
 constructor(private _pacienteService:PacienteService){

}
    @Get('Paciente')
    mostrarTodos(){
        return this._pacienteService.arregloPacientes;
    }
    @Post('Paciente')
    crearPacientes(@Body(new PipesUsuarios(PACIENTE_SCHEMA)) bodyParams, @Res() res, @Res() req){
            const paciente = new  Paciente(bodyParams.idPaciente, bodyParams.nombre, bodyParams.apellido, bodyParams.fechaNacimiento, bodyParams.hijos, bodyParams.tieneSeguro);
            return res.send(this._pacienteService.crearPaciente(paciente));
    }

    @Get('Paciente/:id')
    obtenerUno(@Res() res, @Req() req, @Param() parametros) {
        const paciente=this._pacienteService.obtenerUno(parametros.id);
        return res.send(paciente);
    }

    @Put('Paciente/:id')
    editarUno(@Body() bodyParams, @Res() res, @Param() parametro){
        const respuesta=this._pacienteService.editarUno(parametro.id,bodyParams.nombre, bodyParams.apellido, bodyParams.fecha, bodyParams.hijos, bodyParams.seguro);
        return res.send(respuesta);
    }




}