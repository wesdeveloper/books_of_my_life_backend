const Joi = require('joi');

const validateOptions = {
  abortEarly: false,
  allowUnknown: true,
};

/**
 * Validate the params on the request.
 * If some value does not match with schema, return the response of the request with the errors.
 * If pass on validate transport the params to 'req.payload.params' and remove 'req.params'.
 *
 * @param {*} schema - Schema of the parameter.
 * @param {*} name - Name of the value that needs to match with the schema.
 */
export const validateParam = (schema, name) => (req, res, next) => {
  const result = Joi.validate({ [name]: req.params[name] }, schema);
  if (result.error) {
    return res.status(400).json(result.error);
  }
  if (!req.payload) {
    req.payload = {};
  }
  if (!req.payload.params) {
    req.payload.params = {};
  }

  req.payload.params[name] = req.params[name];
  delete req.params;
  return next();
};

/**
 * Validate the payload on the request.
 * If some value does not match with schema, return the response of the request with the errors.
 * If pass on validate transport the body to 'req.payload.body' and remove 'req.body'.
 *
 * @param {*} schema - Schema of the payload.
 */
export const validateBody = schema => (req, res, next) => {
  const result = Joi.validate(req.body, schema, validateOptions);

  if (result.error) {
    const errors = result.error.details.reduce(
      (acc, curr) =>
        acc.concat({ path: curr.path.join('.'), message: curr.message }),
      [],
    );

    return res.status(400).send(errors);
  }

  return next();
};

/**
 * Validate the object.
 * If some value does not match with schema, return an array of errors.
 *
 * @param {Object} object - Object that will be validate.
 * @param {Object} schema - Schema of the object
 */
export const validateObject = (object, schema) => {
  const result = Joi.validate(object, schema, validateOptions);

  if (result.error) {
    return result.error.details.reduce(
      (acc, curr) =>
        acc.concat({ path: curr.path.join('.'), message: curr.message }),
      [],
    );
  }
  return [];
};

module.exports = {
  validateBody,
  validateParam,
  validateObject,
};
