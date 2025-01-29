import { Navigate, Route, Routes } from 'react-router-dom';
import { Paths } from './route-names';
import { SomethingWentWrong } from '../components/errors/something-went-wrong';
import { Dashboard } from 'components/dashboard/dashboard';
import { Wallet } from 'components/wallet/wallet';

export const WalletRoutes = () => {
  return (
    <Routes>
      <Route path={Paths.Dashboard} errorElement={<SomethingWentWrong />} element={<Dashboard />} />
      <Route path={Paths.Wallet} errorElement={<SomethingWentWrong />} element={<Wallet />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
};
