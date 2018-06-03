
import { Injectable} from "@nestjs/common";
@Injectable()
export class MedicamentoService {

    constructor(medicamentoService: MedicamentoService) {

    }

    arregloMedicamento: MedicamentoClass[] = [];

    crearMedicamento(medicamento: MedicamentoClass): MedicamentoClass[] {
        this.arregloMedicamento.push(medicamento);
        return this.arregloMedicamento;
    }

    buscarPaciente(id) {
        const usuarios = this.arregloMedicamento.map(medicamento => {
            const idBuscada = medicamento.pacienteId;
            return idBuscada;
        });
    }

    listarTodos() {
        return this.arregloMedicamento;
    }

    obtenerUno(id){

        return this.arregloMedicamento[id];
    }


    editarUno(id, gramosAingerir, nombre, composicion, usadoPara, fechaCaducidad, numeroPastillas, pacienteID){
        let arregloU=this.obtenerUno(id);
        arregloU.gramosAlIngerir=gramosAingerir;
        arregloU.nombre=nombre;
        arregloU.composicion=composicion;
        arregloU.usadoPara=usadoPara;
        arregloU.fechaCaducidad=fechaCaducidad;
        arregloU.numeroPastillas=numeroPastillas;
        arregloU.pacienteId=pacienteID;
        return arregloU;
    };



}


export class MedicamentoClass{
    constructor(
        public gramosAlIngerir: number,
        public nombre: string,
        public composicion: string,
        public usadoPara: string,
        public fechaCaducidad: string,
        public numeroPastillas: number,
        public pacienteId: number,
    ){};
}
