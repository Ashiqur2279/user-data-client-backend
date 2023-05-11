import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Componets/Login/Login.jsx';
import Registration from './Componets/Registration/Registration.jsx';
import UserForm from './Componets/UserForm/UserForm.jsx';
import Home from './Componets/Home/Home.jsx';
import UserData from './Componets/UserData/UserData.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/userform',
        element: <UserForm></UserForm>
      },
      {
        path: '/userdata',
        element: <UserData></UserData>,
        loader: () => fetch ('http://localhost:5000/users')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
