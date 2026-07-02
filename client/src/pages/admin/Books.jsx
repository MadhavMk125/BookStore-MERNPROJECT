import { useEffect, useState } from "react";
import { getAllBooks } from "../../services/api";

function Books() {

    const [books,setBooks]=useState([]);

    useEffect(()=>{

        loadBooks();

    },[]);

    const loadBooks=async()=>{

        const res=await getAllBooks();

        setBooks(res.data.books);

    };

    return(

        <div className="container">

            <h2>Books</h2>

            <table className="table table-bordered">

                <thead>

                    <tr>

                        <th>Title</th>

                        <th>Author</th>

                        <th>Price</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        books.map(book=>(

                            <tr key={book._id}>

                                <td>{book.title}</td>

                                <td>{book.author}</td>

                                <td>₹{book.price}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default Books;