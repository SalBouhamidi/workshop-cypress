import { afterAll, beforeEach, describe, expect, it, jest } from "@jest/globals";
import request from "supertest";
import app from "../../../../app.js";
import Delivery from "../../../models/deliveryModel.js";
import mongoose from "mongoose";

jest.mock('../../../models/deliveryModel.js')

describe('Delivery API tests', () => {
    let mockDelivery;
    beforeEach(() => {
        mockDelivery = {
            _id: "671626ab71601b0fee770774",
            orderId: "67161571ed4c9b34c03c6abf",
            deliveryAgentId: "67160f9491bd03f2de2030c2",
            status: "on_the_way",
            deliveredAt: null,
            save: jest.fn().mockResolvedValue(true)
        }
        jest.clearAllMocks();
    })

    afterAll(async () => {
        await mongoose.connection.close();
    })

    it('should return status 200 and message Command confirmed', async () => {
        Delivery.findById = jest.fn().mockResolvedValue(mockDelivery);

        const response = await request(app)
            .put('/api/delivery/validat/delivery')
            .send({ deliveryId: mockDelivery._id });
            
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('message', 'Command confirmed');
    })
})