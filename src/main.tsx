import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import routes from './routes'
<<<<<<< HEAD
import "react-international-phone/style.css";

=======
>>>>>>> a4895cf079f061c6e9187f602c3301cfaa86f576

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL, // o '/' si quieres rápido en local
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
