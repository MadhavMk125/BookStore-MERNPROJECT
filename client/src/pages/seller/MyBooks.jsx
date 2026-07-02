import { useEffect, useState } from "react";

import {

    getSellerBooks,

    deleteBook

} from "../../services/api";

function MyBooks() {

    const [books, setBooks] = useState([]);

    useEffect(() => {

        loadBooks();

    }, []);

    const loadBooks = async () => {

        try {

            const res = await getSellerBooks();

            setBooks(res.data.books);

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this book?"))
            return;

        try {

            await deleteBook(id);

            loadBooks();

        }

        catch (error) {

            alert(error.response?.data?.message);

        }

    };

    return (

        <div className="container mt-4">

            <h2>My Books</h2>

            <table className="table table-bordered mt-3">

                <thead>

                    <tr>

                        <th>Title</th>

                        <th>Price</th>

                        <th>Stock</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        books.map((book)=>(

                            <tr key={book._id}>

                                <td>{book.title}</td>

                                <td>₹{book.price}</td>

                                <td>{book.stock}</td>

                                <td>

                                    <button

                                        className="btn btn-danger btn-sm"

                                        onClick={()=>
                                            handleDelete(book._id)
                                        }

                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default MyBooks;