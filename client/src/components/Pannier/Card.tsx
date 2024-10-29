import { useEffect, useState } from 'react';
import { toast } from "sonner";
import axios from "axios";

export default function Card() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(items);
    }, []);

    const handleDecrease = (e, id) => {
        e.preventDefault();

        const updatedItems = cartItems.map(item => {
            if (item._id === id && item.quantity > 1) {
                item.quantity -= 1;
            }
            return item;
        });
        updateCart(updatedItems);
    };

    const handleIncrease = (e, id) => {
        e.preventDefault();
        const updatedItems = cartItems.map(item => {
            if (item._id === id && item.quantity < 99) {
                item.quantity += 1;
            }
            return item;
        });
        updateCart(updatedItems);
    };

    const handleRemove = (index) => {
        const updatedItems = [...cartItems];
        updatedItems.splice(index, 1);
        updateCart(updatedItems);
    };

    const updateCart = (items) => {
        localStorage.setItem('cart', JSON.stringify(items));
        setCartItems(items);
    };

    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    const getUserId = (token) => {
        if (!token) {
            return null;
        }
        const payload = token.split('.')[1];
        console.log(JSON.parse(atob(payload)))
        return JSON.parse(atob(payload));
    }

    async function handleOrder() {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("You need to be logged in before you place an order");
            return;
        }

        const userId = getUserId(localStorage.getItem('token'));
        console.log("User ID:", userId._id);
        const items = cartItems.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price.toFixed(2),
            _id: item._id
        }));

        try {
            const result = await axios.post(`http://localhost:3000/api/order`, {
                clientId: userId._id,
                restaurantId: "671a5fc278924d448ac45394",
                items: items,
                totalPrice: calculateTotalPrice(items),
                status: "pending",
            });
            //  console.log("clientId:", userId._id);
            //  console.log("restaurantId:", "671a5fc278924d448ac45394");
            //  console.log("items:", items);
            //  console.log("totalPrice:", calculateTotalPrice(items));
            console.log(result);
        } catch (e) {
            toast.error('failed');
            console.log("failed because", e);
        }
    }

    return (
        <>
            <div className="th-cart-wrapper section-padding fix bg-white">
                <div className="container">
                    <div className="woocommerce-notices-wrapper">
                        <div className=" bg-red-600"><p className="font-semibold text-white text-center">Welcome to your cart</p></div>
                    </div>
                    <form action="#" className="woocommerce-cart-form">
                        <table className="cart_table">
                            <thead>
                                <tr>
                                    <th className="cart-colname">Menu Name</th>
                                    <th className="cart-col-price">Price</th>
                                    <th className="cart-col-quantity">Quantity</th>
                                    <th className="cart-col-total">Total</th>
                                    <th className="cart-col-remove">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.length > 0 ? (
                                    cartItems.map((item, index) => (
                                        <tr key={index} className="cart_item">
                                            <td data-title="Name">
                                                <a className="cartname" href="shop-details.html">{item.name}</a>
                                            </td>
                                            <td data-title="Price">
                                                <span className="amount"><bdi><span>$</span>{item.price}</bdi></span>
                                            </td>
                                            <td data-title="Quantity">
                                                <div className="quantity">
                                                    <button className="btn qty-btn" onClick={(e) => handleDecrease(e, item._id)}>-</button>
                                                    <input type="number" className="qty-input" value={item.quantity} min="1" max="99" readOnly />
                                                    <button className="plus qty-btn" onClick={(e) => handleIncrease(e, item._id)}>+</button>
                                                </div>
                                            </td>
                                            <td data-title="Total">
                                                <span className="amount"><bdi><span>$</span>{(item.price * item.quantity).toFixed(2)}</bdi></span>
                                            </td>
                                            <td data-title="Remove">
                                                <a onClick={() => handleRemove(index)} className="remove">Remove</a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="empty-cart">No items in cart</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </form>
                    <div className="row justify-content-end">
                        <div className="">
                            <div className="wc-proceed-to-checkout">
                                <a onClick={handleOrder} className="theme-btn btn-fw">Order now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
