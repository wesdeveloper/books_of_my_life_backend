import * as Joi from 'joi';

const id = Joi.number();

export default {
  id: Joi.object({ id: id.required() }),
  createUser: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
  }),
};
