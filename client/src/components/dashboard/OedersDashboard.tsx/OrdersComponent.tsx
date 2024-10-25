import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Item {
    name: string;
    quantity: number;
    price: number;
}

interface Order {
    _id: string;
    clientId: {
        _id: string;
        userName: string;
    };
    items: Item[];
    totalPrice: number;
    status: 'pending' | 'preparing' | 'ready' | 'delivered';
    createdAt: string;
}

interface OrdersComponentProps {
    orders: Order[];
}

const OrdersComponent: React.FC<OrdersComponentProps> = ({ orders }) => {
    const getStatusColor = (status: Order['status']) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-500';
            case 'preparing':
                return 'bg-blue-500';
            case 'ready':
                return 'bg-green-500';
            case 'delivered':
                return 'bg-gray-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>Restaurant Orders</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[400px]">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead>Items</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Time</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order._id}>
                                    <TableCell>{order.clientId.userName}</TableCell>
                                    <TableCell>
                                        <ul className="list-disc list-inside">
                                            {order.items.map((item, index) => (
                                                <li key={index}>
                                                    {item.name} - Qty: {item.quantity}
                                                </li>
                                            ))}
                                        </ul>
                                    </TableCell>
                                    <TableCell>${order.totalPrice.toFixed(2)}</TableCell>
                                    <TableCell>
                                        <Badge className={`${getStatusColor(order.status)} text-white`}>
                                            {order.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{new Date(order.createdAt).toLocaleString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}

export default OrdersComponent;
