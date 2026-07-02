import { useEffect, useState } from "react";
import { myOrders } from "../services/api";

function MyOrders() {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {

        try {

            const res = await myOrders();

            setOrders(res.data.orders);

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Unable to fetch orders"
            );

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (
            <h2 className="text-center mt-5">
                Loading Orders...
            </h2>
        );

    }

    return (

        <div className="container mt-4">

            <h2 className="mb-4">
                My Orders
            </h2>

            {

                orders.length === 0 ?

                (

                    <div className="alert alert-info">

                        No Orders Found

                    </div>

                )

                :

                (

                    <div className="row">

                        {

                            orders.map((order) => (

                                <div
                                    className="col-md-6 mb-4"
                                    key={order._id}
                                >

                                    <div className="card shadow">

                                        <div className="card-body">

                                            <h4>
                                                {order.book.title}
                                            </h4>

                                            <hr />

                                            <p>

                                                <strong>Author :</strong>

                                                {" "}

                                                {order.book.author}

                                            </p>

                                            <p>

                                                <strong>Quantity :</strong>

                                                {" "}

                                                {order.quantity}

                                            </p>

                                            <p>

                                                <strong>Total :</strong>

                                                {" "}

                                                ₹{order.totalPrice}

                                            </p>

                                            <p>

                                                <strong>Status :</strong>

                                                {" "}

                                                <span className="badge bg-success">

                                                    {order.orderStatus}

                                                </span>

                                            </p>

                                            <p>

                                                <strong>Payment :</strong>

                                                {" "}

                                                {order.paymentMethod}

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}

export default MyOrders;