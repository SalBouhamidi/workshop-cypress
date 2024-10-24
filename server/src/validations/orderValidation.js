import expressValidator from 'express-validator'
import mongoose from 'mongoose'

const { body, validationResult } = expressValidator

export const validateOrderAndDeliveryId = [
    body('orderId')
        .trim()
        .notEmpty()
        .withMessage('Order ID is required')
        .custom(value => {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                throw new Error('Invalid Order ID');
            }
            return true;
        }),
    body('deliveryMan')
        .trim()
        .notEmpty()
        .withMessage('Delivery Man ID is required')
        .custom(value => {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                throw new Error('Invalid Delivery Man ID');
            }
            return true;
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

export const validateOrderId = [
    body('orderId')
        .trim()
        .notEmpty()
        .withMessage('Order is required')
        .custom(value => {
            if(!mongoose.Types.ObjectId.isValid(value)){
                throw new Error('Invalid Order ID')
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