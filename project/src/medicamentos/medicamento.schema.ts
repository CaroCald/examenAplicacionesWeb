import * as Joi from 'joi';
export const MEDICAMENTO_SCHEMA = Joi
    .object().keys({
        gramos: Joi.number(),
        nombre: Joi.string().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
        composicion: Joi.number().integer().greater(18).less(40),
        usadoPara: Joi.string().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
        fechaCaducidad: Joi.string(),
        numeroPastillas:Joi.number(),
        pacienteId:Joi.number(),
    });