import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from "@nestjs/common";
import {MedicamentoClass, MedicamentoService} from "./medicamento.service";
import {PipesUsuarios} from "../pipes/pipes.usuarios";
import {MEDICAMENTO_SCHEMA} from "./medicamento.schema";

@Controller('Medicamentos')
export class MedicamentosController {

    constructor(private medicamentoService: MedicamentoService){

    }

    @Get('Medicamento')
    mostrarTodos(){
        return this.medicamentoService.arregloMedicamento
    }

    @UsePipes(new PipesUsuarios(MEDICAMENTO_SCHEMA))
    @Post('Medicamento')
    crearPacientes(@Body() bodyParams, @Res() res, @Req() req){
        const enviagramos= bodyParams.gramosAlIngerir;
        const enviaNombre= bodyParams.nombre;
        const enviaComposicion= bodyParams.composicion;
        const enviaUsado= bodyParams.usadoPara;
        const enviaFecha= bodyParams.fechaCaducidad;
        const enviaPastillas= bodyParams.numeroPastillas;
        const enviaId=bodyParams.pacienteId;

        const enviaParametros =(enviaId && enviaNombre && enviagramos && enviaFecha && enviaComposicion &&enviaUsado && enviaPastillas);
        if(enviaParametros){
            const paciente = new  MedicamentoClass(bodyParams.gramosAlIngerir,  bodyParams.nombre,
                bodyParams.composicion, bodyParams.usadoPara, bodyParams.fechaCaducidad, bodyParams.numeroPastillas, bodyParams.pacienteId );
            return res.send(this.medicamentoService.crearMedicamento(paciente));
        }else{
            return res
                .status(400)
                .send({
                    mensaje: 'No envia parametros',
                    status: 400
                })
        }



    }


    @Get('Medicamento/:id')
    obtenerUno(@Res() res, @Req() req, @Param() parametros) {
        const medicamento=this.medicamentoService.obtenerUno(parametros.id);
        return res.send(medicamento);
    }

    @Put('Medicamento/:id')
    editarUno(@Body() bodyParams, @Res() res, @Param () parametro){
        const respuesta=this.medicamentoService.editarUno(parametro.id, bodyParams.gramosAlIngerir,  bodyParams.nombre,
            bodyParams.composicion, bodyParams.usadoPara, bodyParams.fechaCaducidad, bodyParams.numeroPastillas, bodyParams.pacienteId);
        return res.send(respuesta);
    }

}