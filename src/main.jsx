import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FourOhFour from './FourOhFour.jsx'
import Sandwiches from './Sandwiches.jsx'
import SandwichesById from './SandwichesById.jsx'
import Burgers from './Burgers.jsx'
import Home from './Home.jsx'
import Disney from './Disney.jsx'
import DisneyCharacter from './DisneyCharacter.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


async function disneyLoader() {
    const res = await fetch('https://api.disneyapi.dev/character')
    const data = await res.json()
    return data
}

async function disneyCharacterLoader(idParam) {
    const res = await fetch(`https://api.disneyapi.dev/character/${idParam}`)
    const data = await res.json()
    return data
}

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'sandwiches',
                element: <Sandwiches />
            },
            {
                path: 'sandwiches/:orders',
                element: <SandwichesById />
            },
            {
                path: 'burgers',
                element: <Burgers />
            },
            {
                path: 'disney',
                element: <Disney />,
                loader: disneyLoader
            },
            {
                path: 'disney/:id',
                element: <DisneyCharacter />,
                loader: ({ params }) => disneyCharacterLoader(params.id)
            },
        ]
    },
    {
        path: '*',
        element: <FourOhFour />
    }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
