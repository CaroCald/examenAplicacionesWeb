import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from "@nestjs/common";
import {Medicamento, MedicamentoService} from "./medicamento.service";
import {PipesUsuarios} from "../pipes/pipes.usuarios";
import {MEDICAMENTO_SCHEMA} from "./medicamento.schema";
import {PACIENTE_SCHEMA} from "../paciente/paciente.schema";

@Controller()
export class MedicamentosController {

    constructor(private medicamentoService: MedicamentoService){

    }

    @Get('Medicamento')
    mostrarTodos(){
        return this.medicamentoService.arregloMedicamento
    }

    //@UsePipes(new PipesUsuarios(MEDICAMENTO_SCHEMA))
    @Post('Medicamento')
    crearMedicamentos(@Body() bodyParams, @Res() res, @Req() req){
        const medicamento = new  Medicamento(bodyParams.gramos,  bodyParams.nombre,
            bodyParams.composicion, bodyParams.usadoPara, bodyParams.fechaCaducidad, bodyParams.numeroPastillas, bodyParams.pacienteId );
            return res.send(this.medicamentoService.crearMedicamento(medicamento));

    }


    @Get('Medicamento/:id')
    obtenerUno(@Res() res, @Req() req, @Param() parametros) {
        const validarId= (parametros.id);
        if(validarId){
            const medicamento=this.medicamentoService.obtenerUno(parametros.id);
            return res.send(medicamento);
        }
        else
        {
            return res.send({mensaje: 'ID no encontrado'})
        }

    }

    @Put('Medicamento/:id')
    editarUno(@Body(new PipesUsuarios(PACIENTE_SCHEMA)) bodyParams, @Res() res, @Param () parametro){
        const respuesta=this.medicamentoService.editarUno(parametro.id, bodyParams.gramos,  bodyParams.nombre,
            bodyParams.composicion, bodyParams.usadoPara, bodyParams.fechaCaducidad, bodyParams.numeroPastillas, bodyParams.pacienteId);
        return res.send(respuesta);
    }

}