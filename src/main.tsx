import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import routes from './routes'
import "react-international-phone/style.css";


const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL, // o '/' si quieres rápido en local
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
