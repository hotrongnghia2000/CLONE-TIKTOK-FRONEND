import { Navigate, Outlet } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Admin from '../pages/Admin';

const HandlePrivateRoute = () => {
  const isAuth = true;

  return isAuth ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

export let privateRouter = [
  {
    element: <HandlePrivateRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [{ path: '/admin', element: <Admin /> }],
      },
    ],
  },
];
