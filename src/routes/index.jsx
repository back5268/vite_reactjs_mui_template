import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

// project imports
import routes from './routes';
import { useLoadDataState, useUserState } from '@store';
import { Customization, LoadData, MainLayout } from '@layout';

const MinimalLayout = (props) => (
  <>
    {props.children}
    <Customization />
  </>
);

const PrivateRoutes = () => {
  const { userInfo } = useUserState();
  return userInfo ? <Outlet /> : <Navigate to="/auth/login" />;
};

const PublicRoutes = () => {
  const { userInfo } = useUserState();
  return !userInfo ? <Outlet /> : <Navigate to="/" />;
};

const Router = () => {
  const { loadData } = useLoadDataState();

  return (
    <>
      {loadData ? (
        <LoadData />
      ) : (
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
      )}
    </>
  );
};

export default Router;
