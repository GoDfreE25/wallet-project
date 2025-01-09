import { ProgressChart } from './components/progress-chart/progress-chart';
import { Statistic } from './components/statistic/statistic';
import s from '../dashboard/dashboard.module.scss';

export const Dashboard = () => {
  return (
    <div className={s.dashboard}>
      <Statistic />
      <ProgressChart />
    </div>
  );
};
