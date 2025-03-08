import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact';
import Cart from './components/Cart';
import RestaurantPage from './components/RestaurantPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const myRouter = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        errorElement : <ErrorPage />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/About",
                element : <About />
            },
            {
                path : "/Contact",
                element : <Contact />
            },
            {
                path : "/Cart",
                element : <Cart />
            },
            {
                path : "/Restaurant/:ID",
                element : <RestaurantPage />
            }
        ]
    }
])

root.render(
    <RouterProvider router={myRouter} />
)