import Delivery from "../models/deliveryModel.js";

export const createDelivery = async (order, deliveryMan) => {
    try{
        const delivery = new Delivery({
            orderId: order,
            deliveryAgentId: deliveryMan,
        })
        return await delivery.save();
    }catch(err){
        throw err
    }
}