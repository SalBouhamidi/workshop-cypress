import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import titleIcon from '../assets/img/icon/titleIcon.svg';
import popularDishesShape1 from '../assets/img/shape/popularDishesShape1_1.png';
import popularDishesShape2 from '../assets/img/shape/popularDishesShape1_2.png';
import dishes1_3 from "../assets/img/dishes/dishes1_3.png"
import {toast} from "sonner"


export default function Menu() {
    const { restaurantId } = useParams(); 
    const [dishes, setDishes] = useState({});

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/restaurants/${restaurantId}/dishes`); // Adjust the API endpoint as needed
                setDishes(response.data[0]);
                console.log(response.data[0]);
            } catch (err) {
               console.log('ops error ', err)
            } 
        };

        fetchDishes();
    }, [restaurantId]); 
    const getUserId = (token) => {
        if (!token) {
            return null;
        }
        const payload = token.split('.')[1];
        console.log(JSON.parse(atob(payload)))
        return JSON.parse(atob(payload));
    }

    async function handleOrder(id, name, price, e) {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("You need to be logged in before you place an order");
            return;
        }

        const userId = getUserId(localStorage.getItem('token'));
        const item ={
            name: name,
            quantity: 1,
            price: price,
            _id: id
        }

        try {
            const result = await axios.post(`http://localhost:3000/api/order`, {
                clientId: userId._id,
                restaurantId: restaurantId,
                items: item,
                totalPrice: price,
                status: "pending",
            });
            console.log(result);
            toast.success(result.data.message);
        } catch (e) {
            toast.error('failed');
            console.log("failed because", e);
        }
    }


    return (
        <section className="popular-dishes-section fix section-padding">
            <div className="popular-dishes-wrapper style1">
                <div className="shape1 d-none d-xxl-block">
                    <img src={popularDishesShape1} alt="shape" />
                </div>
                <div className="shape2 float-bob-y d-none d-xxl-block">
                    <img src={popularDishesShape2} alt="shape" />
                </div>
                <div className="container">
                    <div className="title-area">
                        <div className="sub-title text-center wow fadeInUp flex justify-center" data-wow-delay="0.5s">
                            <img className="me-1" src={titleIcon} alt="icon" />
                            Our Dishes
                            <img className="ms-1" src={titleIcon} alt="icon" />
                        </div>
                        <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                            Glad to know what you want try
                        </h2>
                    </div>
                    <div className="dishes-card-wrap style1">
                        {
                            dishes.items && dishes.items.length > 0 && (
                                dishes.items.map((item, index) => (
                                    <div className="dishes-card style1 wow fadeInUp" key={index} data-wow-delay={`${0.2 + index * 0.2}s`}>
                                    <div className="social-profile">

                                    </div>
                                    <div className="dishes-thumb flex justify-center ">
                                        <img src={dishes1_3} alt="thumb" />
                                    </div>
                                 
                                    <a >
                                        <h3>{item.name}</h3>
                                    </a>
                                    <p>{item.description}</p>
                                    <h6>{item.price}$</h6>
                                    <a onClick={(e)=>handleOrder(item._id, item.name, item.price, e)} className="theme-btn style6"> Order Now </a>

                                </div>
                                    
                                ))
                            )
                        }
                    </div>

                </div>
            </div>
        </section>
    );
    
    
}
