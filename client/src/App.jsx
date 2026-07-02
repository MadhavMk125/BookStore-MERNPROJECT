import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import MyOrders from "./pages/MyOrders";

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

          <Route path="/orders" element={<MyOrders />} />

        </Routes>

      </div>

    </>

  );

}

export default App;