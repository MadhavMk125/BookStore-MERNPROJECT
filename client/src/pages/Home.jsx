import { Link } from "react-router-dom";

function Home() {

    return (

        <>

            {/* Hero Section */}

            <div className="bg-primary text-white rounded p-5 mb-5">

                <div className="container">

                    <h1 className="display-4 fw-bold">

                        📚 Welcome to Online BookStore

                    </h1>

                    <p className="lead mt-3">

                        Discover thousands of books from different categories.
                        Buy your favorite books online with ease.

                    </p>

                    <Link
                        to="/books"
                        className="btn btn-light btn-lg mt-3"
                    >

                        Browse Books

                    </Link>

                </div>

            </div>

            {/* Features */}

            <div className="container">

                <div className="row text-center">

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body">

                                <h1>📖</h1>

                                <h4>Huge Collection</h4>

                                <p>

                                    Browse books across multiple
                                    categories.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body">

                                <h1>🚚</h1>

                                <h4>Fast Delivery</h4>

                                <p>

                                    Place your order quickly and
                                    receive your books on time.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body">

                                <h1>🔒</h1>

                                <h4>Secure Shopping</h4>

                                <p>

                                    JWT Authentication keeps
                                    your account secure.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* About */}

            <div className="container mt-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>

                            About Our BookStore

                        </h2>

                        <p className="mt-3">

                            This BookStore Management System is built
                            using the MERN Stack (MongoDB, Express.js,
                            React.js and Node.js).

                            It supports multiple roles including
                            User, Seller and Admin, allowing secure
                            book management and online ordering.

                        </p>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Home;