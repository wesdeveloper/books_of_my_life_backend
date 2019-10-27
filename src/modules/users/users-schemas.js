const Joi = require('joi');

const id = Joi.string().uuid();

const schemas = {
  id: Joi.object({ id: id.required() }),
  createUser: Joi.object().keys({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
  }),
};

module.exports = { schemas };
