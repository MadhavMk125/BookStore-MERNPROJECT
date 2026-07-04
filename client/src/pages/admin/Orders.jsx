import { useEffect, useState } from "react";
import { getAllOrders } from "../../services/api";

function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        loadOrders();

    }, []);

    const loadOrders = async () => {

        try {

            const res = await getAllOrders();

            setOrders(res.data.orders);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container">

            <h2 className="mb-4">

                Manage Orders

            </h2>

            <table className="table table-striped table-bordered shadow">

                <thead className="table-dark">

                    <tr>

                        <th>Customer</th>

                        <th>Book</th>

                        <th>Quantity</th>

                        <th>Total</th>

                        <th>Status</th>

                        <th>Payment</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        orders.map((order) => (

                            <tr key={order._id}>

                                <td>

                                    {order.user?.name}

                                </td>

                                <td>

                                    {order.book?.title}

                                </td>

                                <td>

                                    {order.quantity}

                                </td>

                                <td>

                                    ₹{order.totalPrice}

                                </td>

                                <td>

                                    <span className="badge bg-success">

                                        {order.orderStatus}

                                    </span>

                                </td>

                                <td>

                                    {order.paymentMethod}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default Orders;