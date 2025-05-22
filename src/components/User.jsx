import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser)

  const handleDelet = (id) => {
    console.log(id);

    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.deletedCount > 0){
            const remining = users.filter((user) => user._id !== id)
            setUsers(remining)
        }
      });
  };

  return (
    <div>
      {/*  */}
      <h2>User Information: {users.length}</h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user?.name}
            {" || "}
            {user?.email}

            <button onClick={() => handleDelet(user?._id)}>X</button>

            <Link to={`/update/${user._id}`}>Update</Link>
          </p>
        ))}
      </div>

      <button onClick={() => navigate("/")}>Add User</button>
    </div>
  );
};

export default User;
