import Order from "../models/orderModel.js";

export const getAllOrders = async (managerId) => {
    try {
        // const managerId = '67160f9491bd03f2de2030c0'
        const orders = await Order.find().populate({
            path: 'restaurantId', 
            select: '_id name address managerId', 
            match: { managerId: managerId }
        }).populate({
            path: 'clientId', 
            select: '_id userName' 
        })
        .exec();
        const filteredOrders = orders.filter(order => order.restaurantId !== null);
        return filteredOrders;
    } catch (err) {
        throw err
    }
}

export const findOrderById = async (orderId) => {
    try {
        const order = await Order.findById({ _id: orderId });
        if (!order) {
            const error = new Error('Order not found');
            error.status = 404;
            throw error
        }
        return order;
    } catch (err) {
        if (err.name === 'CastError') {
            const error = new Error('Invalid Order ID format');
            error.status = 400;
            throw error;
        }
        throw err
    }
}

export const changeOrderStatus = async (order, status) => {
    try {
        order.status = status;
        await order.save();
    } catch (err) {
        throw err
    }
}

export const deletedOrder = async (order) => {
    try {
        const deletedOrder = await Order.findById({ _id: order });
        if (!deletedOrder) {
            const error = new Error('Order not found');
            error.status = 401
            throw error;
        }
        await deletedOrder.deleteOne({ _id: order });
    } catch (err) {
        if (err.name === 'CastError') {
            const error = new Error('Invalid Order ID format');
            error.status = 400;
            throw error;
        }
        throw err
    }
}