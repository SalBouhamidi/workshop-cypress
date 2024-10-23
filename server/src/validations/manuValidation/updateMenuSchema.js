import Joi from 'joi';

// Validation schema for menu input
const menuSchema = Joi.object({
  items: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().required().messages({
          'string.empty': 'Please enter the item name.',
          'any.required': 'Item name is required.',
        }),
        description: Joi.string().required().messages({
          'string.empty': 'Please provide a description for the item.',
          'any.required': 'Item description is required.',
        }),
        price: Joi.number().greater(0).required().messages({
          'number.base': 'Price must be a valid number.',
          'number.greater': 'Price must be greater than zero.',
          'any.required': 'Price is required.',
        }),
        available: Joi.boolean().optional(),
      })
    )
    .min(1)
    .required()
    .messages({
      'array.empty': 'Please add at least one menu item.',
      'any.required': 'Menu items are required.',
    }),
});

// Validate function
export const validateUpdateMenu = (data) => {
  return menuSchema.validate(data, { abortEarly: false });
};