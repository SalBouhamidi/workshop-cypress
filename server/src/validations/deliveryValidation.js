import { body, validationResult } from "express-validator"
import mongoose from "mongoose"

export const validateDeliveryId = [
    body('deliveryId')
        .trim()
        .notEmpty()
        .withMessage('Delivery ID is required')
        .custom(value => {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                throw new Error('Invalide Delivery ID')
            }
            return true
        }),
    function (req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const error = new Error(errors.array()[0].msg);
                error.status = 400;
                throw error
            }
            next();
        } catch (err) {
            if (err.status) {
                return res.status(err.status).json({
                    error: err.message
                })
            }
            return res.status(500).json({
                error: 'server error'
            })
        }
    }
]