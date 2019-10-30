import * as Joi from 'joi';

const id = Joi.string().uuid();

export default {
  id: Joi.object({ id: id.required() }),
  createUser: Joi.object().keys({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
  }),
};
