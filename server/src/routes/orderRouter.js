import express from 'express'
const Router = express.Router();
import { getOders, validateTheOrder, refuseTheOrder } from '../controllers/Order/orderController.js'
import { validateOrderAndDeliveryId, validateOrderId } from '../validations/orderValidation.js'

Router.get('/get/orders', getOders);
Router.put('/validate/order',validateOrderAndDeliveryId, validateTheOrder);
Router.delete('/refuse/order',validateOrderId, refuseTheOrder);

export default Router;
