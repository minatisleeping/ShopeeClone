/* eslint-disable react-refresh/only-export-components */
import { Navigate, Outlet, useRoutes } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import RegisterLayout from '../layouts/RegisterLayout'
import Login from './Login'
import ProductList from './ProductList'
import Register from './Register'
import Profile from './Profile'

const isAuthenticated = true
const ProtectedRoutes = () => {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

const RejectedRoutes = () => {
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '/',
      element: <ProtectedRoutes />,
      children: [
        {
          path: '/profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        }
      ]
    },
    //* Protected routes - only accessible when authenticated
    {
      path: '/',
      element: <RejectedRoutes />,
      children: [
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
      ]
    }
  ])

  return routeElements
}
