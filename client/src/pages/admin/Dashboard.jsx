import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { adminDashboard } from "../../services/api";

function Dashboard() {

    const [stats, setStats] = useState(null);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const res = await adminDashboard();

            setStats(res.data.statistics);

        }

        catch (error) {

            console.log(error);

        }

    };

    if (!stats) {

        return <h3 className="text-center mt-5">Loading...</h3>;

    }

    return (

        <div className="container">

            <h2 className="mb-4">

                Admin Dashboard

            </h2>

            <div className="row">

                <div className="col-md-3">

                    <div className="card text-center shadow">

                        <div className="card-body">

                            <h5>Users</h5>

                            <h2>{stats.totalUsers}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card text-center shadow">

                        <div className="card-body">

                            <h5>Books</h5>

                            <h2>{stats.totalBooks}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card text-center shadow">

                        <div className="card-body">

                            <h5>Orders</h5>

                            <h2>{stats.totalOrders}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card text-center shadow">

                        <div className="card-body">

                            <h5>Sellers</h5>

                            <h2>{stats.totalSellers}</h2>

                        </div>

                    </div>

                </div>

            </div>

            <hr />

            <div className="mt-4">

                <Link
                    className="btn btn-primary me-3"
                    to="/admin/users"
                >
                    Manage Users
                </Link>

                <Link
                    className="btn btn-success me-3"
                    to="/admin/books"
                >
                    Manage Books
                </Link>

                <Link
                    className="btn btn-warning"
                    to="/admin/orders"
                >
                    Manage Orders
                </Link>

            </div>

        </div>

    );

}

export default Dashboard;