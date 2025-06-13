import { createBrowserRouter } from 'react-router-dom'

import { Home } from './Pages/Home'
import { Layout } from './components/Layout'
import { Login } from './Pages/Login'
import { Perfil } from './Pages/Perfil'


export const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/profile',
        element: <Perfil/>
      }
    ]
  },
    {
        path: '/login',
        element: <Login/>
    }
])