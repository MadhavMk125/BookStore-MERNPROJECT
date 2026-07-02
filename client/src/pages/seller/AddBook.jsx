import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { addBook } from "../../services/api";

function AddBook() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        title: "",

        author: "",

        category: "",

        description: "",

        price: "",

        stock: ""

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addBook(form);

            alert("Book Added Successfully");

            navigate("/seller/books");

        }

        catch (error) {

            alert(error.response?.data?.message);

        }

    };

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-body">

                    <h2>Add Book</h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            className="form-control mb-3"
                            name="title"
                            placeholder="Title"
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="author"
                            placeholder="Author"
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="category"
                            placeholder="Category"
                            onChange={handleChange}
                        />

                        <textarea
                            className="form-control mb-3"
                            name="description"
                            placeholder="Description"
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="price"
                            type="number"
                            placeholder="Price"
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="stock"
                            type="number"
                            placeholder="Stock"
                            onChange={handleChange}
                        />

                        <button className="btn btn-success">

                            Add Book

                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default AddBook;