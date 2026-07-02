import { Link } from "react-router-dom";

function BookCard({ book }) {

    return (

        <div className="col-md-4 mb-4">

            <div className="card h-100 shadow">

                <div className="card-body">

                    <h4>{book.title}</h4>

                    <p>
                        <strong>Author:</strong> {book.author}
                    </p>

                    <p>
                        <strong>Category:</strong> {book.category}
                    </p>

                    <p>
                        <strong>Price:</strong> ₹{book.price}
                    </p>

                    <Link
                        to={`/book/${book._id}`}
                        className="btn btn-primary"
                    >
                        View Details
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default BookCard;