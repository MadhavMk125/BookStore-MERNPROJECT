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

    const [image, setImage] = useState(null);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleImage = (e) => {

        setImage(e.target.files[0]);

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const formData = new FormData();

            Object.keys(form).forEach((key) => {

                formData.append(key, form[key]);

            });

            if (image) {

                formData.append("image", image);

            }

            await addBook(formData);

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
                            type="number"
                            name="price"
                            placeholder="Price"
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            type="number"
                            name="stock"
                            placeholder="Stock"
                            onChange={handleChange}
                        />

                        <label className="form-label">

                            Book Image

                        </label>

                        <input
                            className="form-control mb-3"
                            type="file"
                            accept="image/*"
                            onChange={handleImage}
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