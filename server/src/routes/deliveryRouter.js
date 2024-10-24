import express from 'express'
const Router = express.Router();
import { validateDeliveryId } from '../validations/deliveryValidation.js'
import { confirmCommand, fetchTheCommands } from '../controllers/Delivery/deliveryController.js'

Router.put('/validat/delivery', validateDeliveryId, confirmCommand);
Router.get('/get/deliverys', fetchTheCommands);

export default Router;