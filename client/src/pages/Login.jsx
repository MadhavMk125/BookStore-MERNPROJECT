import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/api";
import { AuthContext } from "../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [form, setForm] = useState({

        email: "",

        password: ""

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

            const res = await loginUser(form);

            login(res.data.user, res.data.token);

            alert("Login Successful");

            navigate("/");

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Login Failed"

            );

        }

    };

    return (

        <div className="container mt-5" style={{ maxWidth: "450px" }}>

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">

                    Login

                </h2>

                <form onSubmit={handleSubmit}>

                    <input

                        className="form-control mb-3"

                        type="email"

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

                    <button

                        className="btn btn-primary w-100"

                    >

                        Login

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;