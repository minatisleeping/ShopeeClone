import { useRoutes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import RegisterLayout from '../layouts/RegisterLayout'
import Login from './Login'
import ProductList from './ProductList'
import Register from './Register'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])

  return routeElements
}
