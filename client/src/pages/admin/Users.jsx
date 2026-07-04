import { useEffect, useState } from "react";
import { getUsers } from "../../services/api";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        loadUsers();

    }, []);

    const loadUsers = async () => {

        try {

            const res = await getUsers();

            setUsers(res.data.users);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container">

            <h2 className="mb-4">

                Manage Users

            </h2>

            <table className="table table-striped table-bordered shadow">

                <thead className="table-dark">

                    <tr>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Role</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        users.map((user) => (

                            <tr key={user._id}>

                                <td>{user.name}</td>

                                <td>{user.email}</td>

                                <td>

                                    <span
                                        className={`badge ${
                                            user.role === "admin"
                                                ? "bg-danger"
                                                : user.role === "seller"
                                                ? "bg-warning text-dark"
                                                : "bg-primary"
                                        }`}
                                    >
                                        {user.role}
                                    </span>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default Users;