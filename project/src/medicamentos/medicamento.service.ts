import {Injectable} from "@nestjs/common";

@Injectable()
export class MedicamentoService {
    arregloMedicamento: Medicamento[] = [];

    crearMedicamento(medicamento: Medicamento): Medicamento[] {
        this.arregloMedicamento.push(medicamento);
        return this.arregloMedicamento;
    }
    listarTodos() {
        return this.arregloMedicamento;
    }

    obtenerUno(id){

        return this.arregloMedicamento[id];
    }


    editarUno(id, gramosAingerir, nombre, composicion, usadoPara, fechaCaducidad, numeroPastillas, pacienteID){
        let arregloU=this.obtenerUno(id);
        arregloU.gramos=gramosAingerir;
        arregloU.nombre=nombre;
        arregloU.composicion=composicion;
        arregloU.usadoPara=usadoPara;
        arregloU.fechaCaducidad=fechaCaducidad;
        arregloU.numeroPastillas=numeroPastillas;
        arregloU.pacienteId=pacienteID;
        return arregloU;
    };



}


export class Medicamento{
    constructor(
        public gramos: number,
        public nombre: string,
        public composicion: string,
        public usadoPara: string,
        public fechaCaducidad: string,
        public numeroPastillas: number,
        public pacienteId: number,
    ){};
}