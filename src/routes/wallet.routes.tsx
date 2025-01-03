import { Route, Routes } from 'react-router-dom';
import { Paths } from './route-names';
import { SomethingWentWrong } from '../components/errors/something-went-wrong';
import { Dashboard } from 'components/dashboard/dashboard';

export const WalletRoutes = () => {
  return (
    <Routes>
      <Route path={Paths.Dashboard} errorElement={<SomethingWentWrong />} element={<Dashboard />} />
    </Routes>
  );
};
