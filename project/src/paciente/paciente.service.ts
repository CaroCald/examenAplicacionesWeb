import {Injectable} from "@nestjs/common";

@Injectable()
export class PacienteService {

    arregloPacientes: Paciente[] = [];

    crearPaciente(pacientes: Paciente): Paciente[] {
        this.arregloPacientes.push(pacientes);
        return this.arregloPacientes;
    }

    listarTodos() {
        return this.arregloPacientes;
    }

    obtenerUno(id){

        return this.arregloPacientes[id];
    }


    editarUno(id, nombre, apellido, fecha, hijos, seguro){
        let arregloU=this.obtenerUno(id);
        arregloU.nombre=nombre,
            arregloU.apellido=fecha,
            arregloU.fechaNacimeinto=fecha,
            arregloU.hijos=hijos,
            arregloU.tieneSeguro=seguro;
        return arregloU;
    };


}
export class Paciente {


    constructor(
        public idPaciente: number,
        public nombre:string,
        public apellido:string,
        public fechaNacimeinto: string,
        public hijos: number,
        public tieneSeguro: boolean

    ){



    }}