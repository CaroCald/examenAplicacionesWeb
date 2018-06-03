import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';
import * as Joi from 'joi';
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";
import {MEDICAMENTO_SCHEMA} from "../medicamentos/medicamentos.schema";
import {PACIENTE_SCHEMA} from "../paciente/paciente.schema";
import {NoEncontradoExpection} from "../exceptions/no-encontrado.exception";
@Injectable()
export class PipePacientes implements PipeTransform {
    constructor(private readonly schema) {}
    transform(
        valorEnBrutoDelRequest: any,
        metadatosDeLosDecoradoresDelNestjs: ArgumentMetadata) {

        //this.schema = PACIENTE_SCHEMA;
        const {
            error
        } = Joi.validate(
            valorEnBrutoDelRequest, // objeto a validar
            this.schema// un esquema
        );

        const {
            errorNotFound
        } = Joi.validate(
            valorEnBrutoDelRequest, // objeto a validar
            this.schema // un esquema
        );
        if (error) {
            throw new PeticionInvalidaException(
                'Peticion invalida',
                error,
                4
            );
        }
        if(errorNotFound){
            throw  new NoEncontradoExpection(
                'No encontrado',
                errorNotFound,
                3
            )
        }
        //return valorEnBrutoDelRequest;

    }
}