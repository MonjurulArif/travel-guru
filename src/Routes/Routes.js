import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Home from "../components/Home";
import News from "../components/News";
import Destination from "../components/Destination";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Login from "../components/Login";
import Booking from "../components/Booking";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/news", element: <News></News> },
      { path: "/destination", element: <Destination></Destination> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/login", element: <Login></Login> },
      { path: "/booking", element: <Booking></Booking> },
    ],
  },
]);
