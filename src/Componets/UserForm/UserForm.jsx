/* eslint-disable no-unused-vars */
import React from 'react';

const UserForm = () => {
    const handleUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const mobile = form.mobile.value;
        const address = form.address.value;
        const user = { name, mobile, address };
        console.log(name, mobile, address);
    }
    return (
        <div>
            <h1 className='text-center mt-4 text-2xl'>Please Provide your Data:</h1>
            <div className='text-center mt-6'>
                <form onSubmit={handleUser} className='' action="">
                    <label htmlFor="Name">Your Name:</label><br />
                    <input className='p-2 ' type="text" name='name' placeholder='Name' required /> <br />
                    <label htmlFor="mobile">Your Mobile:</label> <br />
                    <input className='p-2 ' type="number" name='mobile' placeholder='Mobile No.' required /> <br />
                    <label htmlFor="address">Your Address:</label><br />
                    <input className='p-2 ' type="text" name='address' placeholder='Address' required /> <br />
                    {/* <input className='p-2 bg-slate-700 mt-2' type="submit" value="Submit" /> <br /> */}
                    <button type='submit' className='bg-green-900 p-2 mt-2'> Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UserForm;