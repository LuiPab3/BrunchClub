import { RouteObject } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Events from './pages/Events'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Reservations from './pages/Reservations'
import About from './pages/About'
import Privacy from './pages/Privacy'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'events', element: <Events /> },
      { path: 'menu', element: <Menu /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'reservations', element: <Reservations /> },
      { path: 'about', element: <About /> },
      { path: 'privacy', element: <Privacy /> },
    ],
  },
]

export default routes
