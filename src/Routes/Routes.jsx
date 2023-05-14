import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import Private from "./Private";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/register',
            element : <Register></Register>
        },
        {
          path: '/bookService/:id',
          element: <Private><BookService></BookService></Private>,
          loader : ({params}) => fetch(`https://car-doctor-server-pitamchandra.vercel.app/services/${params.id}`)
        },
        {
          path : '/bookings',
          element : <Private><Bookings></Bookings></Private>
        }
      ]
    },
  ]);

export default router;