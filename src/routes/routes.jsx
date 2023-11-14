import { lazy } from 'react';

// project imports
import { Loadable } from '@components';

const Login = Loadable(lazy(() => import('@views/auth/LoginPage')));
const Register = Loadable(lazy(() => import('@views/auth/RegisterPage')));
const ForgotPassword = Loadable(lazy(() => import('@views/auth/ForgotPasswordPage')));

const DashboardDefault = Loadable(lazy(() => import('@views/dashboard')));
const Users = Loadable(lazy(() => import('@views/users')));

const CategoryTemplate = Loadable(lazy(() => import('@views/configs/category-template')));
const Template = Loadable(lazy(() => import('@views/configs/template')));
const Log = Loadable(lazy(() => import('@views/configs/log')));
const BackList = Loadable(lazy(() => import('@views/configs/black-list')));

const Service = Loadable(lazy(() => import('@views/services/service')));
const ServiceDetail = Loadable(lazy(() => import('@views/services/service-detail')));
const ServiceUse = Loadable(lazy(() => import('@views/services/service-use')));
const MyService = Loadable(lazy(() => import('@views/services/my-service')));
const Company = Loadable(lazy(() => import('@views/services/company')));
const Project = Loadable(lazy(() => import('@views/services/project')));

const Mail = Loadable(lazy(() => import('@views/tests/mail')));
const Sms = Loadable(lazy(() => import('@views/tests/sms')));

const routes = [
  { path: '/auth/login', element: Login, public: true },
  { path: '/auth/register', element: Register, public: true },
  { path: '/auth/forgot-password', element: ForgotPassword, public: true },

  { path: '/', element: DashboardDefault, layout: true },
  { path: '/dashboard', element: DashboardDefault, layout: true },
  { path: '/user', element: Users, layout: true },

  { path: '/category-template', element: CategoryTemplate, layout: true },
  { path: '/template', element: Template, layout: true },
  { path: '/log', element: Log, layout: true },
  { path: '/black-list', element: BackList, layout: true },

  { path: '/service', element: Service, layout: true },
  { path: '/service-detail', element: ServiceDetail, layout: true },
  { path: '/service-use', element: ServiceUse, layout: true },
  { path: '/my-service', element: MyService, layout: true },
  { path: '/company', element: Company, layout: true },
  { path: '/project', element: Project, layout: true },

  { path: '/mail', element: Mail, layout: true },
  { path: '/sms', element: Sms, layout: true }
];

export default routes;
