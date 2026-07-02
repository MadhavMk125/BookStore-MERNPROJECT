import { Link } from "react-router-dom";

function Dashboard() {

    return (

        <div className="container mt-4">

            <h2>Seller Dashboard</h2>

            <hr />

            <div className="row">

                <div className="col-md-4">

                    <div className="card shadow">

                        <div className="card-body text-center">

                            <h4>📚 My Books</h4>

                            <Link
                                className="btn btn-primary mt-3"
                                to="/seller/books"
                            >
                                Open
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow">

                        <div className="card-body text-center">

                            <h4>➕ Add Book</h4>

                            <Link
                                className="btn btn-success mt-3"
                                to="/seller/add-book"
                            >
                                Add
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;