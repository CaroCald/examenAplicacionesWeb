import * as Joi from 'joi';
export const PACIENTE_SCHEMA = Joi
    .object().keys({
        id: Joi.number(),
        nombre: Joi.string().required().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
        edad: Joi.number().integer().greater(18).less(40),
        apellido: Joi.string().required().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
        fecha: Joi.string().required(),
        hijos:Joi.number(),
        tieneSeguro:Joi.required()
    });