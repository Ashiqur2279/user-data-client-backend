import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UserData = () => {
    const LoadedUsers = useLoaderData();
    const [users, setUsers] = useState(LoadedUsers)

    const handleDelete = _id =>{
        console.log(_id)
        fetch (`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then (data =>{
            console.log(data)
            if(data.deletedCount !== 0)
            {alert('Deleted Successfully')
            const remaining = users.filter(NewUser = user._id !== _id);
            console.log(remaining, NewUser)
            setUsers(remaining);
        }
        })
    }

    return (
        <div>
            <h1 className='text-4xl text-center mt-6'>Here you can see all users data...</h1>
            <h1 className='text-xl text-center mt-2'> Total Users: {users.length}</h1>
            {
                users.map (user => <p key={user._id}>
                    Name: {user.name} -- 
                    Mobile: {user.mobile} -- 
                    address: {user.address}
                    <button onClick={() => handleDelete(user._id)} className='bg-red-600 p-2 m-2'>Delete Data</button>
                </p>)
            }
        </div>
    );
};

export default UserData;