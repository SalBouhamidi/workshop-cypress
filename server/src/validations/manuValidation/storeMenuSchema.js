import Joi from 'joi';

// Validation schema for menu input
const menuSchema = Joi.object({
  restaurantId: Joi.string().required().messages({
    'string.empty': 'Restaurant ID is required.',
    'any.required': 'Restaurant ID is required.',
  }),
  items: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().required().messages({
          'string.empty': 'Item name is required.',
          'any.required': 'Item name is required.',
        }),
        description: Joi.string().required().messages({
          'string.empty': 'Item description is required.',
          'any.required': 'Item description is required.',
        }),
        price: Joi.number().greater(0).required().messages({
          'number.base': 'Price must be a number.',
          'number.greater': 'Price must be greater than zero.',
          'any.required': 'Price is required.',
        }),
        available: Joi.boolean().optional(),
        images: Joi.array()
          .items(Joi.string().uri().messages({
            'string.uri': 'Each image URL must be valid.',
          }))
          .optional(),
      })
    )
    .min(1)
    .required()
    .messages({
      'array.empty': 'At least one menu item is required.',
      'any.required': 'Menu items are required.',
    }),
});

// Validate function
export const validateStoreMenu = (data) => {
  return menuSchema.validate(data, { abortEarly: false });
};
