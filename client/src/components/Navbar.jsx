import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

    const {

        user,

        logout

    } = useContext(AuthContext);

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link

                    className="navbar-brand"

                    to="/"

                >

                    📚 BookStore

                </Link>

                <div className="navbar-nav ms-auto">

                    <Link

                        className="nav-link"

                        to="/"

                    >

                        Home

                    </Link>

                    <Link

                        className="nav-link"

                        to="/books"

                    >

                        Books

                    </Link>

                    {

                        user ?

                        <>

                            <Link

                                className="nav-link"

                                to="/orders"

                            >

                                Orders

                            </Link>

                            <button

                                className="btn btn-danger ms-2"

                                onClick={logout}

                            >

                                Logout

                            </button>

                        </>

                        :

                        <>

                            <Link

                                className="nav-link"

                                to="/login"

                            >

                                Login

                            </Link>

                            <Link

                                className="nav-link"

                                to="/register"

                            >

                                Register

                            </Link>

                        </>

                    }

                </div>

            </div>

        </nav>

    );

}

export default Navbar;