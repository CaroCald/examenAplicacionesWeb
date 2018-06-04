import * as Joi from 'joi';
export const PACIENTE_SCHEMA = Joi.object().keys({
        id: Joi.number(),
        nombre: Joi.string().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
        apellido: Joi.string().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
        fechaNacimiento: Joi.string().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
        hijos:Joi.number(),
        tieneSeguro:Joi.string(),
    });