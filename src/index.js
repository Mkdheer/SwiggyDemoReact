import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import About from './components/About';
import ErrorPage from './components/ErrorPage';

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
            }
        ]
    }
])

root.render(
    <RouterProvider router={myRouter} />
)