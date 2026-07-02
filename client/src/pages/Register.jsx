import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { registerUser } from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        name: "",

        email: "",

        password: "",

        role: "user"

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

            await registerUser(form);

            alert("Registration Successful");

            navigate("/login");

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Registration Failed"

            );

        }

    };

    return (

        <div className="container mt-5" style={{ maxWidth: "500px" }}>

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">

                    Register

                </h2>

                <form onSubmit={handleSubmit}>

                    <input

                        className="form-control mb-3"

                        placeholder="Name"

                        name="name"

                        value={form.name}

                        onChange={handleChange}

                    />

                    <input

                        className="form-control mb-3"

                        placeholder="Email"

                        name="email"

                        value={form.email}

                        onChange={handleChange}

                    />

                    <input

                        className="form-control mb-3"

                        type="password"

                        placeholder="Password"

                        name="password"

                        value={form.password}

                        onChange={handleChange}

                    />

                    <select

                        className="form-select mb-3"

                        name="role"

                        value={form.role}

                        onChange={handleChange}

                    >

                        <option value="user">User</option>

                        <option value="seller">Seller</option>

                    </select>

                    <button

                        className="btn btn-success w-100"

                    >

                        Register

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Register;