import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import SetSensorsDashboard from '../pages/SetSensorsDasboard';
import HomePageSectionOjective from '../components/molecules/InformationBigCard';
import HomePageSectionMethodology from '../components/molecules/InformationBigCardGrafico';
import HomePageSectionSensors from '../components/organisms/ContentCards';
import HomePageSectionTech from '../components/molecules/InformationBigCardArchitecture';
import SetSensorsPage from '../pages/SetSensorsPage';

import {
  ROUTE_HOME,
  ROUTE_DASHBOARD,
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
  ROUTE_SINGLE_DASHBOARD,
  ROUTE_SECTION_OBJECTIVE,
  ROUTE_SECTION_METHODOLOGY,
  ROUTE_SECTION_TECH,
  ROUTE_SECTION_SENSORS,
  ROUTE_SET_SENSORS,
} from './routes';

function MainRouter() {
  return (
    <Routes>
      <Route path={ROUTE_HOME} element={<HomePage />} />
      <Route path={ROUTE_DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTE_LOGIN} element={<LoginPage />} />
      <Route path={ROUTE_SIGNUP} element={<SignupPage />} />
      <Route path={ROUTE_SINGLE_DASHBOARD} element={<SetSensorsDashboard />} />
      <Route path={ROUTE_SECTION_OBJECTIVE} element={<HomePageSectionOjective />} />
      <Route path={ROUTE_SECTION_METHODOLOGY} element={<HomePageSectionMethodology />} />
      <Route path={ROUTE_SECTION_SENSORS} element={<HomePageSectionSensors />} />
      <Route path={ROUTE_SECTION_TECH} element={<HomePageSectionTech />} />
      <Route path={ROUTE_SET_SENSORS} element={<SetSensorsPage />} />
    </Routes>
  );
}

export default MainRouter;
