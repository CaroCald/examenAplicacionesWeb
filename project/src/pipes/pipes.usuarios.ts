import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import * as Joi from 'joi';
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";
import {NoEncontradoException} from "../exceptions/no-encontrado.exception";
@Injectable()
export class PipesUsuarios implements PipeTransform{
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

        //return valorEnBrutoDelRequest;

    }
}