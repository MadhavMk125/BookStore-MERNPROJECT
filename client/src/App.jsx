import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import AdminBooks from "./pages/admin/Books";
import AdminOrders from "./pages/admin/Orders";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import MyOrders from "./pages/MyOrders";

import SellerDashboard from "./pages/seller/Dashboard";
import MyBooks from "./pages/seller/MyBooks";
import AddBook from "./pages/seller/AddBook";

function App() {

    return (

        <>
            <Navbar />

            <div className="container mt-4">

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/register" element={<Register />} />

                    <Route path="/books" element={<Books />} />

                    <Route path="/book/:id" element={<BookDetails />} />

                    <Route
                        path="/orders"
                        element={
                            <ProtectedRoute>
                                <MyOrders />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/seller"
                        element={
                            <ProtectedRoute role="seller">
                                <SellerDashboard />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/seller/books"
                        element={
                            <ProtectedRoute role="seller">
                                <MyBooks />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/seller/add-book"
                        element={
                            <ProtectedRoute role="seller">
                                <AddBook />
                            </ProtectedRoute>
                        }
                    />
                   <Route
    path="/admin"
    element={
        <ProtectedRoute role="admin">
            <AdminDashboard />
        </ProtectedRoute>
    }
/>

<Route
    path="/admin/users"
    element={
        <ProtectedRoute role="admin">
            <Users />
        </ProtectedRoute>
    }
/>

<Route
    path="/admin/books"
    element={
        <ProtectedRoute role="admin">
            <AdminBooks />
        </ProtectedRoute>
    }
/>

<Route
    path="/admin/orders"
    element={
        <ProtectedRoute role="admin">
            <AdminOrders />
        </ProtectedRoute>
    }
/> 

                </Routes>

            </div>

        </>

    );

}

export default App;