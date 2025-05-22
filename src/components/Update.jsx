import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const user = useLoaderData()

    const hanleUpdate = (e) => {
        e.preventDefault()

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;

        const user = {name, email};
        console.log(user)
        

        
    }
    

    return (
        <div>
            <h3>User Update: {user.name}</h3>

            {/* update user form */}

            
        </div>
    );
};

export default Update;