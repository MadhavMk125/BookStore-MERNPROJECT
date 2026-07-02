import { useEffect,useState } from "react";

import { getAllOrders } from "../../services/api";

function Orders(){

    const [orders,setOrders]=useState([]);

    useEffect(()=>{

        loadOrders();

    },[]);

    const loadOrders=async()=>{

        const res=await getAllOrders();

        setOrders(res.data.orders);

    };

    return(

        <div className="container">

            <h2>Orders</h2>

            <table className="table table-bordered">

                <thead>

                    <tr>

                        <th>User</th>

                        <th>Book</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        orders.map(order=>(

                            <tr key={order._id}>

                                <td>{order.user.name}</td>

                                <td>{order.book.title}</td>

                                <td>{order.orderStatus}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default Orders;