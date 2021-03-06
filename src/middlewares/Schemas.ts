import Joi from 'joi';

export const createProductSchema = Joi.object({
  name: Joi.string().required().min(2),
  description: Joi.string().optional(),
  price: Joi.number().required()
});

export const updateProductSchema = Joi.object({
  name: Joi.string().required().min(2),
  description: Joi.string().optional(),
  price: Joi.number().required()
})

export const createUserSchema = Joi.object({
  username: Joi.string().required().min(4),
  email: Joi.string().required(),
  password: Joi.string().required().min(4)
})

export const loginUserSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(4).required()
})