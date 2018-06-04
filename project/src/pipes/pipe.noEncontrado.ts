import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";
import * as Joi from 'joi';
import {NoEncontradoException} from "../exceptions/no-encontrado.exception";
@Injectable()
export class PipesNoEncontrado implements PipeTransform{
    constructor(private readonly schema) {}
    transform(valorPaciente: any, metadatosDeLosDecoradoresDelNestjs: ArgumentMetadata) {
        const {error} = Joi.validate(
            valorPaciente,
            this.schema
        );
        if (error) {
            throw new NoEncontradoException(
                {
                    erorr: error,
                    mensaje: 'No encontrado',
                },
                5
            );
        }else{
            return valorPaciente;

        }


    }
}