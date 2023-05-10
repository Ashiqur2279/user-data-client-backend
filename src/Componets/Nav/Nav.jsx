/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-300 rounded mx-6 mt-2">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">User Data Collection</a>
                </div>
                <div className="flex-none">
                    <div className="menu menu-horizontal px-4">
                        <Link className='mx-2 bg-gray-600 p-1 px-2 rounded hover:bg-red-800' to='/'><button>Home</button></Link>
                        <Link className='mx-2 bg-gray-600 p-1 px-2 rounded hover:bg-red-800' to='/login'><button>Login</button></Link>
                        <Link className='mx-2 bg-gray-600 p-1 px-2 rounded hover:bg-red-800' to='/registration'><button>Registration</button></Link>
                        <Link className='mx-2 bg-gray-600 p-1 px-2 rounded hover:bg-red-800' to='/userform'><button>User Form</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;