import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { getBook, placeOrder } from "../services/api";

function BookDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [book, setBook] = useState(null);

    const [loading, setLoading] = useState(true);

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {

        fetchBook();

    }, []);

    const fetchBook = async () => {

        try {

            const res = await getBook(id);

            setBook(res.data.book);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    };

    const handleOrder = async () => {

        try {

            await placeOrder({

                book: book._id,

                quantity,

                shippingAddress: "Hyderabad",

                paymentMethod: "Cash On Delivery"

            });

            alert("Order Placed Successfully");

            navigate("/orders");

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Order Failed"

            );

        }

    };

    if (loading) {

        return <h2 className="text-center mt-5">Loading...</h2>;

    }

    if (!book) {

        return <h2>Book Not Found</h2>;

    }

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-body">

                    <h2>{book.title}</h2>

                    <hr />

                    <p><strong>Author :</strong> {book.author}</p>

                    <p><strong>Category :</strong> {book.category}</p>

                    <p><strong>Description :</strong> {book.description}</p>

                    <p><strong>Price :</strong> ₹{book.price}</p>

                    <p><strong>Stock :</strong> {book.stock}</p>

                    <p><strong>Rating :</strong> ⭐ {book.rating}</p>

                    <div className="mb-3">

                        <label className="form-label">

                            Quantity

                        </label>

                        <input

                            type="number"

                            className="form-control"

                            value={quantity}

                            min="1"

                            max={book.stock}

                            onChange={(e)=>setQuantity(e.target.value)}

                        />

                    </div>

                    <Link

                        to="/books"

                        className="btn btn-secondary me-2"

                    >

                        Back

                    </Link>

                    <button

                        className="btn btn-success"

                        onClick={handleOrder}

                    >

                        Place Order

                    </button>

                </div>

            </div>

        </div>

    );

}

export default BookDetails;