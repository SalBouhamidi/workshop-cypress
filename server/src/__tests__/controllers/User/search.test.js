import app from "../../../../app"
import express from "express"
import request from "supertest"
import mongoose from "mongoose"
import { describe, expect } from "@jest/globals"
import Restaurant from "../../../models/restaurantModel"

it('Testing if jest is working', ()=>{
    expect(1).toBe(1)
})

describe("GET api/search", ()=>{
    beforeEach(() => {
        const app = express();
        app.post("/api/auth/login");
        request(app);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
  it('Testing if jest is working', ()=>{
    expect(1).toBe(1)
  })
  test("The query is empty",async()=>{
    // let query = {};
    const response = await request(app).get('/api/search');
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Please set the restaurant name or specify the location before you search")

  });
  test("The query has the name of restaurant", async()=>{
    const response = await request(app).get('/api/search?name=Test');
    console.log(response);
    expect(response).not.toBeNull;
  })
  test("the restaurant name does not exist", async()=>{
    const response = await request(app).get('/api/search?name="Random"');
    console.log(response);
    expect(response.body.message).not.toBeNull();
    expect(response.body.message).toBe("There's no restaurants available");
    expect(response.status).toBe(403);    
  })

  // test("the restaurant name does exits", async()=>{
  //   const response = await request(app).get('/api/search?name="Italian Bistro"');
  //   expect(response.body.message).not.toBeNull();
  //   expect(response.status).toBe(200)
  // })

})


