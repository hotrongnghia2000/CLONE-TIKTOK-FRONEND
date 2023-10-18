import { Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Admin from '../pages/Admin';
import NotFound from '../pages/NotFound';

export let publicRouter = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Navigate to="/home" replace={true} /> },
      { path: '/home', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/admin', element: <Admin /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
