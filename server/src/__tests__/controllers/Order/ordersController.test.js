import { jest } from "@jest/globals";
import request from "supertest";
import app from "../../../../app.js";
import Order from "../../../models/orderModel.js";
import { changeOrderStatus } from "../../../repositorys/orderRepository.js";
import mongoose from 'mongoose';
import { refuseTheOrder } from "../../../controllers/Order/orderController.js"; 
import { deletedOrder } from "../../../repositorys/orderRepository.js";// Add the new imports

// Mock the models and repository
jest.mock('../../../models/orderModel.js');
jest.mock('../../../repositorys/orderRepository.js', () => ({
    changeOrderStatus: jest.fn(),
}));

describe('Order API Tests', () => {
    let mockOrder;
    let deliveryId = '60c72b2f9b1e8a3d88f41332';
    beforeEach(() => {
        mockOrder = {
            _id: '60c72b2f9b1e8a3d88f41336',
            clientId: '60c72b2f9b1e8a3d88f41331',
            restaurantId: '60c72b2f9b1e8a3d88f41332',
            items: [
                { name: 'Burger', quantity: 2, price: 5.99 },
                { name: 'Fries', quantity: 1, price: 2.99 }
            ],
            totalPrice: 14.97,
            status: 'pending',
            createdAt: '2024-09-26T20:07:55.165Z',
            updatedAt: '2024-09-26T20:07:55.165Z'
        };

        jest.clearAllMocks();
    });

    afterAll(async () => {
        await mongoose.connection.close(); // Close MongoDB connection
    });

    // Tests for PUT /api/order/validate/order
    describe('PUT /api/order/validate/order', () => {
        it('should return status 200 and order details when the order is found', async () => {
            Order.findById = jest.fn().mockResolvedValue(mockOrder);
            changeOrderStatus.mockResolvedValue(true);

            const response = await request(app)
                .put('/api/order/validate/order')
                .send({ orderId: mockOrder._id });

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('message', 'Order updated');
            expect(response.body).toHaveProperty('order', mockOrder);
        });

        it('should return status 400 if the order is not found', async () => {
            Order.findById = jest.fn().mockResolvedValue(null);

            const response = await request(app)
                .put('/api/order/validate/order')
                .send({ orderId: 'nonexistentId'});

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error', 'Invalid Order ID');
        });

        it('should return status 500 on server error', async () => {
            Order.findById = jest.fn().mockRejectedValue(new Error('Database error'));

            const response = await request(app)
                .put('/api/order/validate/order')
                .send({ orderId: mockOrder._id, deliveryMan: deliveryId });

            expect(response.status).toBe(500);
            expect(response.body).toHaveProperty('error', 'server error!');
        });

        it('should return status 400 if order ID is not provided', async () => {
            const response = await request(app)
                .put('/api/order/validate/order')
                .send(
                    { orderId: ''}
                );

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error', 'Order ID is required');
        });
    });


    // Tests for deletedOrder
    describe('deletedOrder', () => {
        it('should delete the order successfully if the order is found', async () => {
            Order.findById.mockResolvedValue(mockOrder);
            mockOrder.deleteOne = jest.fn().mockResolvedValue(true);

            await deletedOrder(mockOrder._id);

            expect(Order.findById).toHaveBeenCalledWith({ _id: mockOrder._id });
            expect(mockOrder.deleteOne).toHaveBeenCalledWith({ _id: mockOrder._id });
        });

        it('should throw an error if the order is not found', async () => {
            Order.findById.mockResolvedValue(null);

            await expect(deletedOrder(mockOrder._id)).rejects.toThrow('Order not found');
        });

        it('should throw an error if the order ID is invalid', async () => {
            const castError = new Error('CastError');
            castError.name = 'CastError';
            Order.findById.mockRejectedValue(castError);

            await expect(deletedOrder('invalidOrderId')).rejects.toThrow('Invalid Order ID format');
        });
    });

    // Tests for DELETE /api/order/refuse
    describe('DELETE /api/order/refuse', () => {
        let req, res;

        beforeEach(() => {
            req = {
                body: { orderId: mockOrder._id },
            };
            res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
        });

        it('should return 201 when the order is refused successfully', async () => {
            Order.findById.mockResolvedValue(mockOrder);
            mockOrder.deleteOne = jest.fn().mockResolvedValue(true);

            const response = await request(app)
                .delete('/api/order/refuse/order')
                .send({ orderId: mockOrder._id });

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('message', 'Order refused successfully');
        });

        it('should return 401 if the order is not found', async () => {
            Order.findById.mockResolvedValue(null);

            const response = await request(app)
                .delete('/api/order/refuse/order')
                .send({ orderId: mockOrder._id });

            expect(response.status).toBe(401);
            expect(response.body).toHaveProperty('error', 'Order not found');
        });

        it('should return 400 for an invalid order ID', async () => {
            const castError = new Error('CastError');
            castError.name = 'CastError';
            Order.findById.mockRejectedValue(castError);

            const response = await request(app)
                .delete('/api/order/refuse/order')
                .send({ orderId: 'invalidOrderId' });

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error', 'Invalid Order ID');
        });

        it('should return 500 for a server error', async () => {
            Order.findById.mockRejectedValue(new Error('Some server error'));

            const response = await request(app)
                .delete('/api/order/refuse/order')
                .send({ orderId: mockOrder._id });

            expect(response.status).toBe(500);
            expect(response.body).toHaveProperty('error', 'server error');
        });
    });
});
