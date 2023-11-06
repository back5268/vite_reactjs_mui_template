import { lazy } from 'react';

// project imports
import Loadable from '@components/loadable';

const Login = Loadable(lazy(() => import('@views/auth/LoginPage')));
const Register = Loadable(lazy(() => import('@views/auth/RegisterPage')));
const ForgotPassword = Loadable(lazy(() => import('@views/auth/ForgotPasswordPage')));
const DashboardDefault = Loadable(lazy(() => import('@views/dashboard')));
const UtilsTypography = Loadable(lazy(() => import('@views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('@views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('@views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('@views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('@views/utilities/TablerIcons')));
const SamplePage = Loadable(lazy(() => import('@views/sample-page')));

const routes = [
  { path: '/auth/login', element: Login, public: true },
  { path: '/auth/register', element: Register, public: true },
  { path: '/auth/forgot-password', element: ForgotPassword, public: true },

  { path: '/', element: DashboardDefault, layout: true },
  { path: '/util-typography', element: UtilsTypography, layout: true },
  { path: '/util-color', element: UtilsColor, layout: true },
  { path: '/util-shadow', element: UtilsShadow, layout: true },
  { path: '/tabler-icons', element: UtilsTablerIcons, layout: true },
  { path: '/material-icons', element: UtilsMaterialIcons, layout: true },
  { path: '/sample-page', element: SamplePage, layout: true }
];

export default routes