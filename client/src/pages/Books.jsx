import { useEffect, useState } from "react";
import { getBooks } from "../services/api";
import BookCard from "../components/BookCard";

function Books() {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {

        try {

            const res = await getBooks();

            setBooks(res.data.books);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (
            <h3 className="text-center mt-5">
                Loading Books...
            </h3>
        );

    }

    return (

        <div className="container">

            <h2 className="mb-4">
                All Books
            </h2>

            <div className="row">

                {

                    books.length > 0 ?

                        books.map((book) => (

                            <BookCard
                                key={book._id}
                                book={book}
                            />

                        ))

                        :

                        <h3>No Books Available</h3>

                }

            </div>

        </div>

    );

}

export default Books;