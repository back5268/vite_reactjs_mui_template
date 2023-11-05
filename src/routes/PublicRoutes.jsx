import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

// project imports
import Loadable from '@components/loadable';
import Customization from '@layout/Customization';

// login option 3 routing
const Login = Loadable(lazy(() => import('@views/auth/Login')));
const Register = Loadable(lazy(() => import('@views/auth/Register')));
const ForgotPassword = Loadable(lazy(() => import('@views/auth/ForgotPassword')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const MinimalLayout = () => (
  <>
    <Outlet />
    <Customization />
  </>
);

const PublicRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/auth/login',
      element: <Login />
    },
    {
      path: '/auth/register',
      element: <Register />
    },
    {
      path: '/auth/forgot-password',
      element: <ForgotPassword />
    }
  ]
};

export default PublicRoutes;
