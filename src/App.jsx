
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing'
import About from './pages/about'
import Collection from './pages/collection'
import Contact from './pages/contact'
import RootLayout from './layouts/rootLayout'



function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
            
                {
                    index: true,
                    element: <LandingPage />
                },
                {
                    path: "About",
                    element: <About />
                },
                {
                    path: "collection",
                    element: <Collection />
                },
                {
                    path: "contact",
                    element: <Contact />
                },

            ]
        }

    ])
    return <RouterProvider router={router} />
}

export default App
