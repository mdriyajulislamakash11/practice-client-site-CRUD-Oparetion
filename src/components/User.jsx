import React from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
  const loadedUser = useLoaderData();

  return (
    <div>
      {/*  */}
      <h2>User Information: {loadedUser.length}</h2>
      <div>
        {loadedUser.map((user) => (
          <p key={user._id}>
            {user?.name}
            {" || "}
            {user?.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default User;
