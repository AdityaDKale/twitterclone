import React from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./Home"
import Login from "./Login"
import Feed from "./Feed"
import Profile from "./Profile"

const Body = () => {
    const AppRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            children: [{
                path: '/',
                element: <Feed />
            },
            {
                path: '/profile',
                element: <Profile />
            }
            ]
        },
        {
            path: '/login',
            element: <Login />
        }
    ])

    return (
        <div>
            <RouterProvider router={AppRouter} />
        </div>
    )
}

export default Body