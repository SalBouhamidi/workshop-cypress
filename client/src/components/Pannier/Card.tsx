import { useEffect, useState } from 'react';
import {toast} from "sonner"
import axios from "axios"

export default function Card(): JSX.Element {
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(items);
    }, []);
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        if (quantity < 99) {
            setQuantity(quantity + 1);
        }
    };
    const handleRemove = (index) => {
        cartItems.splice(index, 1); 
        updateLocalStorage(cartItems);
        setCartItems([...cartItems]); 
    };

    const updateLocalStorage = (items) => {
        localStorage.setItem('cart', JSON.stringify(items));
    };
    const calculateTotalPrice = (items) => {
        let total = 0;
        items.forEach(item => {
            total += item.price * item.quantity; 
        });
        return total; 
    };
    async function handleOrder(){
        // const token = localStorage.getItem("token");
        // if (!token) {
        //     toast.error("You need to be logged in before you place an order");
        //     return;
        // }
        const items = cartItems.map(item => ({
            name: item.name,
            quantity: quantity, 
            price: item.price.toFixed(2),
            _id: item._id
        }));
        // console.log(items);

        const orderData = {
            clientId: "67160f9491bd03f2de2030bf",
            restaurantId: "671a5fc278924d448ac45394",
            items: items,
            totalPrice: calculateTotalPrice(items),
            status: "pending",
        };
        console.log("Order Data:", orderData);
        try{
            const result = await axios.post(`http://localhost:3000/api/order`, {orderData});
            console.log(result)
        }catch(e){
            toast.error('failed:');
            console.log("failed because", e)
        }


    
    }
    return (
        <>
            <div className="th-cart-wrapper  section-padding fix bg-white">
                <div className="container">
                    <div className="woocommerce-notices-wrapper">
                        <div className=" bg-red-600"><p className="font-semibold text-white text-center">Welcome to your card</p></div>
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
                                                <a className="cartname" href="shop-detailis.html">{item.name}</a>
                                            </td>
                                            <td data-title="Price">
                                                <span className="amount"><bdi><span>$</span>{item.price}</bdi></span>
                                            </td>
                                            <td data-title="Quantity">
                                                <div className="quantity">
                                                    <button className="quantity-minus qty-btn" onClick={handleDecrease}>-</button>
                                                    <input type="number" className="qty-input" value={quantity} min="1" max="99" readOnly />
                                                    <button className="quantity-plus qty-btn" onClick={handleIncrease}>+</button>
                                                </div>
                                            </td>
                                            <td data-title="Total">
                                                <span className="amount"><bdi><span>$</span>{(item.price * quantity)}</bdi></span>
                                            </td>
                                            <td data-title="Remove">
                                                <a onClick={() => handleRemove(index)} className="remove">Remove</a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="empty-cart">Item added</td>
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
