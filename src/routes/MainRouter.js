import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

import {
  ROUTE_HOME,
  ROUTE_DASHBOARD,
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
} from './routes';

function MainRouter() {
  return (
    <Routes>
      <Route path={ROUTE_HOME} element={<HomePage />} />
      <Route path={ROUTE_DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTE_DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTE_LOGIN} element={<LoginPage />} />
      <Route path={ROUTE_SIGNUP} element={<SignupPage />} />
    </Routes>
  );
}

export default MainRouter;
