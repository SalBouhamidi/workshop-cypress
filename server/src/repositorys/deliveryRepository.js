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

export const changeDeliveryStatus = async (deliveryId, status) => {
    try{
        const changedDelivery = await Delivery.findById({ _id: deliveryId});        
        if(!changedDelivery){
            const error = new Error('Command not found');
            error.status = 404
            throw error;
        }
        changedDelivery.status = status;
        await changedDelivery.save()
    }catch(err){
        if (err.name === 'CastError') {
            const error = new Error('Invalid Command ID format');
            error.status = 400;
            throw error;
        }   
        throw err
    }
}

export const getDelivery = async () => {
    return await Delivery.find();
}