import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const user = useLoaderData()

    const hanleUpdate = (e) => {
        e.preventDefault()

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;

        const newUser = {name, email};
        console.log(newUser)

        fetch(`http://localhost:5000/users/${user?._id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

        
    }
    

    return (
        <div>
            <h3>User Update: {user.name}</h3>

            {/* update user form */}

            <form action="" onSubmit={hanleUpdate}>
                <input type="text" name="name" defaultValue={user.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={user.email} id="" />
                <br />
                <button type='submit'>Update user</button>
            </form>

        </div>
    );
};

export default Update;