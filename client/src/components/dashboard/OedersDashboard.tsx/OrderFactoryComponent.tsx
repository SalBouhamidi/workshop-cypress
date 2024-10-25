import api from "@/services/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OrdersComponent from "./OrdersComponent";

interface Order {
    order?: object
}

const OrderFactoryComponent: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    const fetchOrders = async () => {
        try {
            const response = await api.get('/order/get/orders');
            if (response.status === 200) {
                setOrders(response.data.orders);
            }
        } catch (err) {
            console.log(err);
            if (err.response) {
                toast.error(err.response.data.error);
            } else {
                toast.error('server error');
            }
        }
    }

    console.log(orders);
    
    useEffect(() => {
        fetchOrders();
    }, [])
    return (
        <>
            <OrdersComponent orders={orders} />
        </>
    );
}

export default OrderFactoryComponent;
