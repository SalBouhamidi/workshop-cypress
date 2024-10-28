import Joi from 'joi';

// Validation schema for menu input
const menuSchema = Joi.object({
  restaurantId: Joi.string().required().messages({
    'string.empty': 'Restaurant ID is required.',
    'any.required': 'Restaurant ID is required.',
  }),
  name: Joi.string().required().messages({
    'string.empty': 'Name is required.',
    'any.required': 'Name is required.',
  }),
  description: Joi.string().required().messages({
    'string.empty': 'Description is required.',
    'any.required': 'Description is required.',
  }),
  price: Joi.number().positive().required().messages({
    'number.base': 'Price must be a number.',
    'number.positive': 'Price must be positive.',
    'any.required': 'Price is required.',
  }),
  available: Joi.boolean().required().messages({
    'any.required': 'Availability is required.',
  }),
  images: Joi.array()
    .items(Joi.string().messages({
      'string.base': 'Image must be a string.',
    }))
    .min(1)
    .required()
    .messages({
      'array.min': 'At least one image is required.',
      'any.required': 'Images are required.',
    }),
});

// Validate function
export const validateStoreMenu = (data) => {
  return menuSchema.validate(data, { abortEarly: false });
};