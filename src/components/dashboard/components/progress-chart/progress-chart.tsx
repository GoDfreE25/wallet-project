import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import s from '../progress-chart/progress-chart.module.scss';
import { CustomTooltip } from './component/custom-tooltip/custom-tooltip';

const data = [
  {
    name: 'Jan',
    amount: 6000,
  },
  {
    name: 'Feb',
    amount: 15000,
  },
  {
    name: 'Mar',
    amount: 25000,
  },
  {
    name: 'Apr',
    amount: 50000,
  },
  {
    name: 'May',
    amount: 45000,
  },
  {
    name: 'Jun',
    amount: 40000,
  },
  {
    name: 'Jul',
    amount: 20000,
  },
  {
    name: 'Aug',
    amount: 19000,
  },
  {
    name: 'Sep',
    amount: 20000,
  },
  {
    name: 'Oct',
    amount: 14000,
  },
  {
    name: 'Nov',
    amount: 40000,
  },
  {
    name: 'Dec',
    amount: 50000,
  },
];

export const ProgressChart = () => {
  return (
    <div className={s.progress_chart}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="amount" stackId="1" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
