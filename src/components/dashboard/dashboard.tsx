import { ProgressChart } from './components/progress-chart/progress-chart';
import { Statistic } from './components/statistic/statistic';
import s from '../dashboard/dashboard.module.scss';
import { LatestActivity } from './components/latest-activity/latest-activity';

export const Dashboard = () => {
  return (
    <div className={s.dashboard}>
      <div className={s.statistic}>
        <Statistic />
      </div>
      <div className={s.chart}>
        <ProgressChart />
      </div>
      <div className={s.activity}>
        <LatestActivity />
      </div>
    </div>
  );
};
