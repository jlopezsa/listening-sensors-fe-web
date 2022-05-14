import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/DashboardPage';
import {
  ROUTE_HOME,
  ROUTE_DASHBOARD,
} from './routes';

function MainRouter() {
  return (
    <Routes>
      <Route path={ROUTE_HOME} element={<HomePage />} />
      <Route
        path={ROUTE_DASHBOARD}
        element={<DashboardPage />}
      />
    </Routes>
  );
}

export default MainRouter;
