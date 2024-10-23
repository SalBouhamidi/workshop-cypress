import { getAllOrders, findOrderById, changeOrderStatus, deletedOrder } from "../../repositorys/orderRepository.js";
import { createDelivery } from "../../repositorys/deliveryRepository.js"
import { sendNotification } from "../../services/notificationService.js";


export const getOders = async (req, res) => {
    try{
        const response = await getAllOrders();
        return res.status(200).json({
            orders: response
        })
    }catch(err){
        return res.status(500).json({
            error: err
        })
    }
}

const orderToDeliveryStep = async (orderId, deliveryMan) => {
    try{
        const delivery = await createDelivery(orderId, deliveryMan);
        if(!delivery){
            const error = new Error("There is an error in creation, try again!");
            error.status = 401
            throw error;
        }
        return delivery;
    }catch(err){
        throw err
    }
}

export const validateTheOrder = async (req, res) => {
    try{
        const { orderId, deliveryMan } = req.body;
        const order = await findOrderById(orderId);
        await changeOrderStatus(order, 'in_progress');
        const delivery = await orderToDeliveryStep(orderId, deliveryMan);
        await sendNotification(delivery._id, 'New command has asigned to you', 'new_order');
        return res.status(200).json({
            message: 'Order updated',
            order: order
        })
    }catch(err){        
        if(err.status){
            return res.status(err.status).json({
                error: err.message
            })
        }
        return res.status(500).json({
            error: 'server error!'
        })
    }
}

export const refuseTheOrder = async (req, res) => {
    try{
        const { orderId } = req.body;
        await deletedOrder(orderId);
        return res.status(201).json({
            message: "Order refused successfully",
        })
    }catch(err){
        console.log(err);
        
        if(err.status){
            return res.status(err.status).json({
                error: err.message
            })
        }
        return res.status(500).json({
            error: 'server error'
        })
    }
}