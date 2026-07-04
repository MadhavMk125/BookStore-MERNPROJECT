import { Link } from "react-router-dom";

function BookCard({ book }) {

    const imageUrl = book.image
        ? `http://localhost:8000/uploads/${book.image}`
        : "https://via.placeholder.com/300x400?text=No+Image";

    return (

        <div className="col-md-4 mb-4">

            <div className="card h-100 shadow">

                <img
                    src={imageUrl}
                    alt={book.title}
                    className="card-img-top"
                    style={{
                        height: "320px",
                        objectFit: "cover"
                    }}
                />

                <div className="card-body">

                    <h4>{book.title}</h4>

                    <p>

                        <strong>Author:</strong>

                        {" "}

                        {book.author}

                    </p>

                    <p>

                        <strong>Category:</strong>

                        {" "}

                        {book.category}

                    </p>

                    <p>

                        <strong>Price:</strong>

                        {" "}

                        ₹{book.price}

                    </p>

                    <Link
                        to={`/book/${book._id}`}
                        className="btn btn-primary w-100"
                    >
                        View Details
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default BookCard;