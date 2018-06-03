import * as Joi from 'joi';
export const MEDICAMENTO_SCHEMA = Joi
    .object().keys({
        gramosAlIngerir: Joi.number(),
        nombre: Joi.string().required().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
        composicion: Joi.number().integer().greater(18).less(40),
        usadoPara: Joi.string().required().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
        fechaCaducidad: Joi.string().required(),
        numeroPastillas:Joi.number(),
        pacienteId:Joi.number().required()
    });