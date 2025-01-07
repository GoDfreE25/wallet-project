import { Card } from 'antd';
import s from '../statistic/statistic.module.scss';

const stats = [
  { amount: 10000.0, currency: 'EUR', id: '1' },
  { amount: 5652400.0, currency: 'USD', id: '2' },
  { amount: 506, currency: 'UAH', id: '3' },
];

export const Statistic = () => {
  return (
    <div className={s.wrapper}>
      {stats.map((stat) => (
        <Card className={s.card} key={stat.id} title={stat.currency} bordered={false}>
          <p className={s.card_subtitle}>{stat.amount}</p>
        </Card>
      ))}
    </div>
  );
};
