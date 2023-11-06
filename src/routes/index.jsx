import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

// project imports
import routes from './routes';
import MainLayout from '@layout/main-layout';
import Customization from '@layout/Customization';
import { getUserState } from '@store/userState';
import LoadData from '@layout/LoadData';

const MinimalLayout = (props) => (
  <>
    {props.children}
    <Customization />
  </>
);

const PrivateRoutes = () => {
  const userInfo = getUserState().userInfo;
  console.log(userInfo);
  return userInfo ? <Outlet /> : <Navigate to="/auth/login" />;
};

const PublicRoutes = () => {
  const userInfo = getUserState().userInfo;
  console.log(userInfo);
  return !userInfo ? <Outlet /> : <Navigate to="/" />;
};

const Router = () => {
  return (
    <>
      <LoadData />
      <Routes>
        {routes.map((route, index) => {
          const DefaultLayout = route.layout ? MainLayout : MinimalLayout;
          const Page = route.element;
          return (
            <Route key={index} element={route.public ? <PublicRoutes /> : <PrivateRoutes />}>
              <Route
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            </Route>
          );
        })}
        {/* <Route path="*" element={<errorPage.element />} /> */}
      </Routes>
    </>
  );
};

export default Router;
