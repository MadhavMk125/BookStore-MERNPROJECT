import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

    const { user, logout } = useContext(AuthContext);

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link className="navbar-brand" to="/">
                    📚 BookStore
                </Link>

                <div className="navbar-nav ms-auto">

                    <Link className="nav-link" to="/">
                        Home
                    </Link>

                    <Link className="nav-link" to="/books">
                        Books
                    </Link>

                    {user && user.role === "user" && (
                        <Link className="nav-link" to="/orders">
                            My Orders
                        </Link>
                    )}

                    {user && user.role === "seller" && (
                        <Link className="nav-link" to="/seller">
                            Seller Dashboard
                        </Link>
                    )}

                    {user && user.role === "admin" && (
                        <Link className="nav-link" to="/admin">
                            Admin Dashboard
                        </Link>
                    )}

                    {!user ? (
                        <>
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>

                            <Link className="nav-link" to="/register">
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <span className="navbar-text me-3">
                                Welcome, {user.name}
                            </span>

                            <button
                                className="btn btn-outline-light btn-sm"
                                onClick={logout}
                            >
                                Logout
                            </button>
                        </>
                    )}

                </div>

            </div>

        </nav>

    );

}

export default Navbar;